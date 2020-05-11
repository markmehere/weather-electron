import React from 'react';
import { WeatherHeaderClass, WeatherHeaderProps } from './WeatherHeader';
import { TemperatureScale } from '../../types/TemperatureScale';
import { shallow } from 'enzyme';

describe('<WeatherHeader />', () => {

  const defaultProps: WeatherHeaderProps = {
    scale: TemperatureScale.Celsius,
    city: { value: 1105779, label: 'Sydney, AU' },
    homeCity: null,
    setUnits: jest.fn(),
    setCity: jest.fn(),
    goHome: jest.fn()
  }

  it('should render with city selector', () => {
    const result = shallow(<WeatherHeaderClass {...defaultProps}  />);
    expect(result.find('CitySelector')).toHaveLength(1);
    expect(result.find('ScaleToggler')).toHaveLength(1);
  });

  it('matches snapshot', () => {
    const result = shallow(<WeatherHeaderClass {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

});