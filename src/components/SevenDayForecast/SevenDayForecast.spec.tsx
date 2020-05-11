import React from 'react';
import { shallow } from 'enzyme';
import { WeatherKind } from '../../types/WeatherKind';
import { TemperatureScale } from '../../types/TemperatureScale';
import { SevenDayForecastClass } from './SevenDayForecast';

describe('<SevenDayForecast />', () => {

  const defaultProps = {
    forecast: [
      {
        max: 20.2,
        min: -2.2,
        date: '2020-05-09',
        kind: WeatherKind.Clear
      },
      {
        max: 18.2,
        min: 4.6,
        date: '2020-05-10',
        kind: WeatherKind.HeavyCloud
      },
    ],
    city: { value: 1105779, label: 'Sydney, AU' },
    scale: TemperatureScale.Celsius,
    getForecast: () => undefined as any,
    fakeGetForecast: () => undefined as any
  };
  
  const defaultPropsFaren = {
    ...defaultProps,
    forecast: [ ...defaultProps.forecast, { max: 30.2, min: 6.4, date: '2020-05-11', kind: WeatherKind.LightCloud } ],
    scale: TemperatureScale.Fahrenheit
  };

  const defaultPropsError = {
    ...defaultProps,
    error: 'Bad news'
  };

  const defaultPropsNoData = {
    ...defaultProps,
    forecast: null as any
  };

  it('matches snapshot with celsius scale', () => {
    const result = shallow(<SevenDayForecastClass {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with farenheit scale', () => {
    const result = shallow(<SevenDayForecastClass {...defaultPropsFaren}  />);
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with error', () => {
    const result = shallow(<SevenDayForecastClass {...defaultPropsError}  />);
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot no data', () => {
    const result = shallow(<SevenDayForecastClass {...defaultPropsNoData}  />);
    expect(result).toMatchSnapshot();
  });
});
