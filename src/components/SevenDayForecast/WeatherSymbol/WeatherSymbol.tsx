import React from "react";
import weatherAbbr from "../../../data/weather-abbr.json";
import styles from "./WeatherSymbol.less";
import { WeatherKind } from "../../../types/WeatherKind.js";
import { getStatic } from "../../../static";
import moment from "moment";

export interface WeatherSymbolProps {

  // The kind of weather
  kind: WeatherKind;

  // The date of this weather
  date: string;

}

export class WeatherSymbol extends React.Component<WeatherSymbolProps> {

  getSymbol = (kind: WeatherKind) => getStatic(`${kind as string}.svg`);

  getHumanReadable = (kind: WeatherKind) => weatherAbbr[kind];

  render() {
    const prettyDate = moment(this.props.date).format('dddd');
    return <div className={styles.weatherSymbol}>
      <img src={this.getSymbol(this.props.kind)}
        alt={this.getHumanReadable(this.props.kind)} />
      <p className={styles.weatherDescriptionSmall}>{prettyDate}</p>
      <p className={styles.weatherDescription}>{this.getHumanReadable(this.props.kind)}</p>
    </div>;
  }

}