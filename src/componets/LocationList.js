import React from 'react'
import PropTypes from 'prop-types'
import WeatherLocation from './WeatherLocation'
import './style.css'

const LocationList = ({cities, onWeatherLocationClick, citySelected})=>{
  const listCities = cities.map((city, index)=>
    <WeatherLocation
      citySelected={citySelected}
      onWeatherLocationClick={()=>onWeatherLocationClick(city)}
      key={city} city={city}/>)
  return (
    <div className="locationList">
      {listCities}
    </div>
  )
}

LocationList.propTypes = {
  citySelected:PropTypes.string,
  cities: PropTypes.array.isRequired,
  onWeatherLocationClick: PropTypes.func
}
export default LocationList
