import React from 'react';
import { shallow } from 'enzyme';
import { WeatherKind } from '../../../types/WeatherKind';
import { WeatherSymbol } from './WeatherSymbol';

describe('<WeatherSymbol />', () => {

  const defaultProps = {
    kind: WeatherKind.Clear,
    date: '2020-05-10'
  };

  it('should formulate correct image link', () => {
    const mockWeatherSymbol = new WeatherSymbol(defaultProps);
    expect(mockWeatherSymbol.getSymbol('testme' as any)).toBe('http://localhost/static/testme.svg');
  });

  it('should formulate correct human readable string', () => {
    const mockWeatherSymbol = new WeatherSymbol(defaultProps);
    expect(mockWeatherSymbol.getHumanReadable(WeatherKind.Clear)).toBe('Clear');
    expect(mockWeatherSymbol.getHumanReadable(WeatherKind.LightCloud)).toBe('Light Cloud');
    expect(mockWeatherSymbol.getHumanReadable(WeatherKind.HeavyRain)).toBe('Heavy Rain');
    expect(mockWeatherSymbol.getHumanReadable(WeatherKind.Sleet)).toBe('Sleet');
    expect(mockWeatherSymbol.getHumanReadable(WeatherKind.Snow)).toBe('Snow');

  });

  it('matches snapshot', () => {
    const result = shallow(<WeatherSymbol {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

});
