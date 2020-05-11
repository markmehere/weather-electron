import React from 'react';
import { shallow } from 'enzyme';
import { ScaleToggler } from './ScaleToggler';
import { TemperatureScale } from '../../../types/TemperatureScale';

describe('<ScaleToggler />', () => {

  const defaultProps = {
    value: TemperatureScale.Celsius,
    onToggle: jest.fn()
  }

  it('should render with city selector', () => {
    const result = shallow(<ScaleToggler {...defaultProps}  />);
    expect(result.text()).toContain('\u00B0C');
    expect(result.text()).toContain('\u00B0F');
  });

  it('matches snapshot', () => {
    const result = shallow(<ScaleToggler {...defaultProps}  />);
    expect(result).toMatchSnapshot();
  });

});