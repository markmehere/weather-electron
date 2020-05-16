import { GenericAction } from "../../types/GenericAction";
import { CityType } from "../../types/CityType";
import { WeatherDetails } from "../reducers/weather";
import { MetaWeatherResponse } from "../../types/MetaWeatherResponse";
import { GenericThunk } from "../../types/GenericThunk";
import { WeatherKind } from "../../types/WeatherKind";
import { fetchWeather } from "../fetch/weather";

export const GET_FORECAST = 'GET_FORECAST';
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS';
export const GET_FORECAST_FAILURE = 'GET_FORECAST_FAILURE';
export const LOAD_MOCK_FORECAST = 'LOAD_MOCK_FORECAST';

export type GetForecastAction = GenericAction<CityType>;
export type GetForecastSuccessAction = GenericAction<WeatherDetails>;
export type GetForecastFailureAction = GenericAction<string>;
export type LoadMockForecastAction = GenericAction<null>;

export type GetForecastSuccessActionCreator = (data: MetaWeatherResponse, city: CityType) => GetForecastSuccessAction;
export type GetForecastActionCreator = (city: CityType, callback?: () => void) => GenericThunk;
export type LoadMockForcastGenerator = () => LoadMockForecastAction;

const getForecastSuccess: GetForecastSuccessActionCreator = (data, city) => {
  return {
    type: GET_FORECAST_SUCCESS,
    payload: {
      city,
      forecast: data.consolidated_weather.map((day) => ({
        max: day.max_temp,
        min: day.min_temp,
        date: day.applicable_date,
        kind: day.weather_state_abbr
      }))
    }
  };
}

const getForecastFailure = (error: string) => {
  return {
    type: GET_FORECAST_FAILURE,
    payload: error
  };
}

const hash = (str: string) => {
  let hash = 0;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [...(str as any)].forEach((c, i) => hash = i * 300 + str.charCodeAt(i));
  return hash;
};

export const fakeGetForecast: GetForecastActionCreator = (city) => {
  const cityHash = hash(city.label);
  return (dispatch) => {
    dispatch({
      type: GET_FORECAST,
      payload: city
    });
    setTimeout(() => {
      dispatch({
        type: GET_FORECAST_SUCCESS,
        payload: {
          city,
          forecast: [6, 3, -2, 4, 1, 8].map((day) => {
            const max = (cityHash + day) % 38;
            let choice = [ WeatherKind.Clear, WeatherKind.HeavyCloud, WeatherKind.LightCloud ];
            if (max < 22) choice = [ WeatherKind.HeavyRain, WeatherKind.LightRain, WeatherKind.Showers ];
            if (max < 10) choice = [ WeatherKind.Snow, WeatherKind.Sleet, WeatherKind.Hail ];
            return {
              max: max,
              min: Math.min(max - 3, (cityHash - day) % 32),
              kind: choice[(cityHash + day) % 3]
            };
          })
        }
      })
    }, 1000)
  }
}

export const getForecast: GetForecastActionCreator = (city, callback) => {
  return (dispatch) => {
    dispatch({
      type: GET_FORECAST,
      payload: city
    });
    return fetchWeather(city).then(
      (response: Response) => {
        if (response.ok) {
          const promise = response.json().then(
            (data: MetaWeatherResponse) => dispatch(getForecastSuccess(data, city)),
            (error: TypeError) => dispatch(getForecastFailure(error.message))
          );
          if (callback) promise.then(callback);
        }
        else {
          dispatch(getForecastFailure(`${response.status} - ${response.statusText}`));
        }
      },
      (error: TypeError) => dispatch(getForecastFailure(error.message))
    );
  }
}

export const loadMockForecast: LoadMockForcastGenerator = () => ({
  type: LOAD_MOCK_FORECAST,
  payload: null
});
