import { WeatherKind } from "./WeatherKind";

export interface WeatherForecast {
  max: number;
  min: number;
  date: string;
  kind: WeatherKind;
}
