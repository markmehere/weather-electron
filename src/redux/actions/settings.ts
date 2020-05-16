import { TemperatureScale } from "../../types/TemperatureScale";
import { GenericAction } from "../../types/GenericAction";
import { CityType } from "../../types/CityType";
import { GenericThunk } from "../../types/GenericThunk";
import { getForecast } from "./weather";

export const GO_HOME = 'GO_HOME';
export const SET_UNITS = 'SET_UNITS';
export const SET_CITY = 'SET_CITY';

export type GoHomeAction = GenericAction<CityType>;
export type SetUnitAction = GenericAction<TemperatureScale>;
export type SetCityAction = GenericAction<CityType>;

export type GoHomeActionCreator = () => GenericThunk;
export type SetUnitActionCreator = (scale: TemperatureScale) => SetUnitAction;
export type SetCityActionCreator = (city: CityType) => GenericThunk;

export const goHome: GoHomeActionCreator = () => {
  return (dispatch, getState, extra) => {
    dispatch({
      type: GO_HOME,
      payload: getState().settings.homeCity
    });
    // fakeGetForecast(city)(dispatch, getState, extra) if not wanting to go to the server
    getForecast(getState().settings.homeCity)(dispatch, getState, extra);
  }
};

export const setUnits: SetUnitActionCreator = (scale) => ({
  type: SET_UNITS,
  payload: scale
});

// Redux is happy for you to dispatch "anything you want" here - https://github.com/reduxjs/redux/issues/1738
export const setCity: SetCityActionCreator = (city) => {
  return (dispatch, getState, extra) => {
    dispatch({
      type: SET_CITY,
      payload: city
    });
    // fakeGetForecast(city)(dispatch, getState, extra) if not wanting to go to the server
    getForecast(city)(dispatch, getState, extra);
  }
};
