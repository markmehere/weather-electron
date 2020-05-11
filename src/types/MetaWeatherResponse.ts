import { WeatherKind } from "./WeatherKind";

export interface ConsolidatedWeatherResponse {
  id: string;
  weather_state_name: string;
  weather_state_abbr: WeatherKind;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export interface MetaWeatherResponse {
  consolidated_weather: ConsolidatedWeatherResponse[]
}