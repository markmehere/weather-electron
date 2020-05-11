import React from "react";
import styles from "./WeatherTemperature.less";
import { TemperatureScale } from "../../../types/TemperatureScale";

export interface WeatherTemperatureProps {

  // The maximum in centigrade
  max: number;

  // The minimum in centrigrade
  min: number;

  // The temperature scale to use
  scale: TemperatureScale;

}

export class WeatherTemperature extends React.Component<WeatherTemperatureProps> {

  convert = (value: number) => (value * 1.8 + 32.0).toFixed(0);

  render() {
    const max = (this.props.scale === TemperatureScale.Celsius) ? this.props.max.toFixed(0) : this.convert(this.props.max);
    const min = (this.props.scale === TemperatureScale.Celsius) ? this.props.min.toFixed(0) : this.convert(this.props.min);
    const unit = (this.props.scale === TemperatureScale.Celsius) ? 'C' : 'F';

    return <div className={styles.weatherTemperature}>
      <span className={styles.max}>{max}&deg;{unit}</span> / <span className={styles.min}>{min}&deg;{unit}</span>
    </div>;
  }

}