import { CityType } from "../../types/CityType";

export function fetchWeather(city: CityType) {
  return fetch(`https://www.metaweather.com/api/location/${city.value}/`, {'mode': 'no-cors'});
}
