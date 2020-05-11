import React from 'react';
import styles from './App.less';
import SevenDayForecast from './components/SevenDayForecast/SevenDayForecast';
import WeatherHeader from './components/WeatherHeader/WeatherHeader';

export default class App extends React.Component {

  render() {
    return <div className={styles.app}>
      <header className={styles.appHeader}>
        <WeatherHeader />
        <SevenDayForecast />
      </header>
    </div>;
  }

}
