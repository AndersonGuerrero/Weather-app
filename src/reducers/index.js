import { combineReducers } from 'redux'
import { cities, getForecastDataFromCities, getCityState, getWeatherCities } from './cities'
import { city } from './city'



export default combineReducers({
  city,
  cities,
})

export {
  getForecastDataFromCities,
  getCityState,
  getWeatherCities
}
