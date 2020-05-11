import React from "react";
import styles from "./SevenDayForecast.less";
import { WeatherSymbol } from "./WeatherSymbol/WeatherSymbol";
import { WeatherTemperature } from "./WeatherTemperature/WeatherTemperature";
import { TemperatureScale } from "../../types/TemperatureScale";
import { AppStore } from "../../redux/reducers";
import { connect } from "react-redux";
import { WeatherForecast } from "../../types/WeatherForecast";
import { getForecast, GetForecastActionCreator, fakeGetForecast } from "../../redux/actions/weather";
import { CityType } from "../../types/CityType";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const FIRST_ROW_COUNT = 5;

export interface SevenDayForecastProps {

  // The seven-day forecast
  forecast?: WeatherForecast[];

  // The city we are forecasting
  city: CityType;

  // The temperature scale to use for the forecast
  scale: TemperatureScale;

  // The error from the state
  error?: string;

  // Get forecast action creator
  getForecast: GetForecastActionCreator;

  // Fake get forecast action creator
  fakeGetForecast: GetForecastActionCreator;

}

export class SevenDayForecastClass extends React.Component<SevenDayForecastProps> {

  componentDidMount() {
      this.props.getForecast(this.props.city);
  }

  renderPanel = (forecast: WeatherForecast, key: string | number) => (<div className={styles.panel} key={key}>
      <WeatherSymbol kind={forecast.kind} date={forecast.date} />
      <WeatherTemperature max={forecast.max} min={forecast.min} scale={this.props.scale} />
    </div>);

  renderLoader = () => <div className={styles.loading}>
    <Loader type="Bars" height={100} width={100} color="#2c4c7c" />
  </div>;

  renderError = () => <div className={styles.loading}>
    <p>{this.props.error}</p>
  </div>;

  render() {
    if (this.props.error) return this.renderError();
    if (!this.props.forecast) return this.renderLoader();
    const firstRow = this.props.forecast.slice(0, FIRST_ROW_COUNT);
    const secondRow = this.props.forecast.slice(FIRST_ROW_COUNT);
  
    return <div className={styles.overall}>
      <div className={styles.firstRow}>
        { firstRow.map(this.renderPanel) }
      </div>
      <div className={styles.secondRow}>
        { secondRow.map(this.renderPanel) }
      </div>
    </div>;
  }

}

const mapStateToProps = (state: AppStore) => ({
  forecast: state.weather.current?.forecast,
  scale: state.settings.scale,
  city: state.settings.city,
  error: state.weather.error
});

const mapDispatchToProps = {
  getForecast: getForecast,
  fakeGetForecast: fakeGetForecast
};

export default connect(mapStateToProps, mapDispatchToProps)(SevenDayForecastClass);
