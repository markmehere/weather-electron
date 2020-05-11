import React from 'react';
import { shallow } from 'enzyme';
import { WeatherTemperature } from './WeatherTemperature';
import { TemperatureScale } from '../../../types/TemperatureScale';

describe('<WeatherTemperature />', () => {

  const defaultProps = {
    max: 20.2,
    min: -2.2,
    scale: TemperatureScale.Celsius
  };
  
  const defaultPropsFaren = {
    ...defaultProps,
    scale: TemperatureScale.Fahrenheit
  };

  it('should convert to farenheit correctly', () => {
    const mockWeatherSymbol = new WeatherTemperature(defaultProps);
    expect(mockWeatherSymbol.convert(30.2)).toBe('86');
    expect(mockWeatherSymbol.convert(28.9)).toBe('84');
    expect(mockWeatherSymbol.convert(-5.45)).toBe('22');
  });

  it('should render celsius to integer value only', () => {
    const result = shallow(<WeatherTemperature {...defaultProps}  />);
    expect(result.text()).toContain('20\u00B0C / -2\u00B0C');
  });

  it('matches snapshot with celsius scale', () => {
    const result = shallow(<WeatherTemperature {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

  it('matches snapshot with farenheit scale', () => {
    const result = shallow(<WeatherTemperature {...defaultPropsFaren}  />);
    expect(result).toMatchSnapshot();
  });

});
