import React from "react";
import styles from "./WeatherHeader.less";
import { ScaleToggler } from "./ScaleToggler/ScaleToggler";
import { CitySelector } from "./CitySelector/CitySelector";
import { TemperatureScale } from "../../types/TemperatureScale";
import { SetUnitActionCreator, setUnits, SetCityActionCreator, setCity, GoHomeActionCreator, goHome } from "../../redux/actions/settings";
import { AppStore } from "../../redux/reducers";
import { connect } from "react-redux";
import { CityType } from "../../types/CityType";

export interface WeatherHeaderProps {

  // The temperature scale
  scale: TemperatureScale;

  // The city
  city: CityType;

  // The home city
  homeCity: CityType | null;

  // The temperature unit action creator
  setUnits: SetUnitActionCreator;

  // The set city action creator
  setCity: SetCityActionCreator;

  // The go home unit action creator
  goHome: GoHomeActionCreator;

}

export class WeatherHeaderClass extends React.Component<WeatherHeaderProps>  {

  render() {
    const { scale, city, setUnits, setCity, goHome } = this.props;

    return <div className={styles.header}>
      <CitySelector value={city} onChange={setCity} onGoHome={this.props.homeCity ? goHome : undefined} />
      <ScaleToggler value={scale} onToggle={setUnits} />
    </div>;
  }
}

const mapStateToProps = (state: AppStore) => ({
  scale: state.settings.scale,
  city: state.settings.city,
  homeCity: state.settings.homeCity
});

const mapDispatchToProps = {
  setUnits: setUnits,
  setCity: setCity,
  goHome: goHome
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHeaderClass);
