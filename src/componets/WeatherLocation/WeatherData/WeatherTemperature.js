import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropsTypes from 'prop-types'
import {
    CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE
} from '../../../constans/weathers'
import './style.css'


const icons = {
  [CLOUD]: "cloud",
  [SUN]: "day-sunny",
  [RAIN]: "rain",
  [THUNDER]: "day-thunderstorm",
  [SNOW]: "snow",
  [DRIZZLE]: "day-showers"
}

const getWeatherIcons = (weatherState)=>(
    <WeatherIcons className="wicon" name={icons[weatherState]} size="4x" />
)

const WeatherTemperature = ({ temperature, weatherState})=>(
    <div className="weatherTemperatureCont">
        {getWeatherIcons(weatherState)}
        <span className="temperature" >{`${ temperature }`}</span>
        <span className="temperatureType">C°</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropsTypes.number.isRequired,
    weatherState: PropsTypes.string
}
export default WeatherTemperature
