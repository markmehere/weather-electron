import { SetUnitAction, SetCityAction, GoHomeAction } from "./settings";
import { LoadMockForecastAction, GetForecastAction, GetForecastSuccessAction, GetForecastFailureAction } from "./weather";

export type AppAction =
  GoHomeAction | SetUnitAction | SetCityAction |
  GetForecastAction | GetForecastSuccessAction | GetForecastFailureAction | LoadMockForecastAction;