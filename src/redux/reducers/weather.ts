import { AppAction } from "../actions";
import { CityType } from "../../types/CityType";
import { WeatherForecast } from "../../types/WeatherForecast";
import { GET_FORECAST_SUCCESS, GET_FORECAST, GET_FORECAST_FAILURE } from "../actions/weather";

export interface WeatherDetails {
  city: CityType;
  forecast: WeatherForecast[];
}

export interface WeatherStore {
  loading: boolean;
  current: WeatherDetails | null;
  previous: WeatherDetails | null;
  error?: string;
}

const initialState: WeatherStore = {
  loading: true,
  current: null,
  previous: null
};

function weatherReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case GET_FORECAST:
      return {
        ...state,
        current: null,
        previous: state.current,
        error: ''
      }
    case GET_FORECAST_SUCCESS:
      return {
        ...state,
        current: action.payload,
        error: ''
      };
    case GET_FORECAST_FAILURE:
      return {
        ...state,
        error: action.payload
      }
  }

  return state;
}

export default weatherReducer;
