import { TemperatureScale } from "../../types/TemperatureScale";
import { AppAction } from "../actions";
import { SET_UNITS, SET_CITY, GO_HOME } from "../actions/settings";
import { CityType } from "../../types/CityType";
import Store from "electron-store"; // eslint-disable-line import/default
import { run } from "../initializers/settings";

export interface SettingsStore {
  scale: TemperatureScale;
  city: CityType;
  homeCity: CityType;
}

const store = new Store();

const initialState: SettingsStore = {
  scale: TemperatureScale.Celsius,
  ...run(store)
};

function settingsReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_UNITS:
      store.set('scale', action.payload);
      return {
        ...state,
        scale: action.payload
      };
    case GO_HOME:
    case SET_CITY:
      store.set('city', action.payload);
      return {
        ...state,
        city: action.payload
      };
  }

  return state;
}

export default settingsReducer;
