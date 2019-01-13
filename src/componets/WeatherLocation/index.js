import React from 'react'
import {CircularProgress} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import './style.css'

const WeatherLocation = ({city, data, onWeatherLocationClick, citySelected})=>{
    const clase = citySelected ? 'weatherLocationCont selected' : 'weatherLocationCont'
    return (<div className={clase} onClick={onWeatherLocationClick}>
        <Location city={city} />
        { data ? <WeatherData data={data}/> : <CircularProgress />}
    </div>)
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
  citySelected:PropTypes.string,
  data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired
  })
}

export default WeatherLocation
