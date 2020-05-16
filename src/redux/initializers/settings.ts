import cities from "../../data/cities.json";
import Store from "electron-store"; // eslint-disable-line import/default
import { TemperatureScale } from "../../types/TemperatureScale";
import { SettingsStore } from "../reducers/settings";

const defaultCity = {
  value: 1103816,
  label: 'Melbourne, AU'
};

export function run(store: Store): SettingsStore {
  let initialCity = null;
  let homeCity = null;
  let scale = TemperatureScale.Celsius;

  if (store.has('city')) {
    initialCity = store.get('city');
    if (!initialCity || !initialCity.value || !initialCity.label) initialCity = null;
  }
  
  if (store.has('homeCity')) {
    homeCity = store.get('homeCity');
    if (!homeCity || !homeCity.value || !homeCity.label) homeCity = null;
  }
  else {
    try {
      const target = Intl.DateTimeFormat().resolvedOptions().timeZone.split('/')[1];
      const candidates = cities.filter(city => city.name === target);
      if (candidates.length > 0) {
        homeCity = {
          value: candidates[0].woeid,
          label: `${candidates[0].name}, ${candidates[0].countryCode}`
        };
        store.set(homeCity);
      }
    }
    catch (e) { }  // eslint-disable-line no-empty
  }

  if (!initialCity && homeCity) { initialCity = homeCity; }
  else if (!initialCity) { initialCity = defaultCity; }
  
  if (store.has('scale')) {
    if (store.get('scale') === TemperatureScale.Fahrenheit) scale = TemperatureScale.Fahrenheit;
  }

  return {
    city: initialCity,
    homeCity: homeCity,
    scale: scale
  }
}
