import { combineReducers } from "redux";
import settings, { SettingsStore } from "./settings";
import weather, { WeatherStore } from "./weather";

export interface AppStore {
  settings: SettingsStore;
  weather: WeatherStore;
};

export default combineReducers({ settings, weather });