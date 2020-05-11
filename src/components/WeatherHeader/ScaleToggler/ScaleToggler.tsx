import React from "react";
import ToggleButton from "react-toggle-button";
import styles from "./ScaleToggler.less";
import { TemperatureScale } from "../../../types/TemperatureScale";

export interface ScaleTogglerProps {

  // The current temperature scale
  value: TemperatureScale;

  // Callback when temperature is changed
  onToggle: (value: TemperatureScale) => void;

}

const trackStyle = {
  height: 15,
};

const thumbStyle = {
  position: 'absolute',
  width: 30,
  height: 30,
  boxShadow: `0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24)`
};

export class ScaleToggler extends React.Component<ScaleTogglerProps> {

  render() {
    const { value, onToggle } = this.props;

    return  <div className={styles.toggler}>
      <div>&deg;C</div>
      <div className={styles.centerToggle}>
        <ToggleButton
          inactiveLabel={''}
          activeLabel={''}
          value={ value === TemperatureScale.Fahrenheit }
          onToggle={(value: boolean) => {
            onToggle(value ? TemperatureScale.Celsius : TemperatureScale.Fahrenheit );
          }}
          colors={{
            activeThumb: {
              base: 'rgb(250,250,250)',
            },
            inactiveThumb: {
              base: 'rgb(62,130,247)',
            },
            active: {
              base: 'rgb(207,221,245)',
              hover: 'rgb(177, 191, 215)',
            },
            inactive: {
              base: 'rgb(65,66,68)',
              hover: 'rgb(95,96,98)',
            }
          }}
          trackStyle={trackStyle}
          thumbStyle={thumbStyle}
          thumbAnimateRange={[-10, 36]}
          />
      </div>
      <div>&deg;F</div>
    </div>;
  }
}