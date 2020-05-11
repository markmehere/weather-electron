import React from 'react';
import { WeatherKind } from '../../types/WeatherKind';
import { MetaWeatherResponse } from '../../types/MetaWeatherResponse';
import { getForecast, GET_FORECAST, GET_FORECAST_SUCCESS } from './weather';
import 'jest-fetch-mock';

describe('weather action creators', () => {

  it('should execute getForecast as expected', (next) => {
    const fakeApiResponse: MetaWeatherResponse = { 
      consolidated_weather: [
        {
          id: 'hello',
          weather_state_name: 'vic',
          weather_state_abbr: WeatherKind.Clear,
          created: 'today',
          applicable_date: 'today',
          min_temp: 12.4,
          max_temp: 20.2,
          wind_speed: 16,
          wind_direction: 280,
          air_pressure: 40,
          humidity: 50,
          visibility: 200,
          predictability: 7.4
        },
        {
          id: 'hello-2',
          weather_state_name: 'vic',
          weather_state_abbr: WeatherKind.LightCloud,
          created: 'today',
          applicable_date: 'tomorrow',
          min_temp: 8.9,
          max_temp: 19.2,
          wind_speed: 15,
          wind_direction: 45,
          air_pressure: 60,
          humidity: 72,
          visibility: 220,
          predictability: 6.4
        }
      ]
    };
    fetchMock.mockResponse(JSON.stringify(fakeApiResponse));
    const finish = () => {
      expect(dispatch.mock.calls.length).toBe(2);
      expect(dispatch.mock.calls[0][0]).toEqual({
        type: GET_FORECAST,
        payload: { value: 1105779, label: 'Sydney, AU' }
      });
      expect(dispatch.mock.calls[1][0]).toEqual({
        type: GET_FORECAST_SUCCESS,
        payload: {
          city: { value: 1105779, label: 'Sydney, AU' },
          forecast: [
            { date: 'today', max: 20.2, min: 12.4, kind: WeatherKind.Clear },
            { date: 'tomorrow', max: 19.2, min: 8.9, kind: WeatherKind.LightCloud }
          ]
        }
      });
      next();
    };
    const action = getForecast({ value: 1105779, label: 'Sydney, AU' }, finish);
    const dispatch = jest.fn();
    action(dispatch, () => null as any, undefined);
  });

});