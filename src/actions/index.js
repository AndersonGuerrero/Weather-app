import {getUrlForecast} from './../services/getUrlForecastByCity'
import {getDataForecast} from './../services/forecastExtended'
import { getData } from './../services/weatherLocation'
import { getUrl } from './../services/getUrlWeatherByCity'

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const SET_WEATHER = 'SET_WEATHER'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload})
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload})

const setCity = payload => ({type: SET_CITY, payload})
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload})

export const setWeather = payload =>{
  return dispatch => {
    payload.forEach(city=>{
      dispatch(getWeatherCity(city))
      return fetch(getUrl(city)).then(dataResponse=>{
        return dataResponse.json()
      }).then((weather_data)=>{
        const weather = getData(weather_data)
        dispatch(setWeatherCity({city, weather}))
      }).catch(()=>{
      })
    })
  }
}
export const setSelectedCity = payload =>{
  return (dispatch, getState) =>{
      dispatch(setCity(payload))
      const state = getState()
      const date = state.cities[payload] && state.cities[payload].forecastDataDate
      const now = new Date()
      if(date && (date-now) < (1 * 60 * 1000)){
        return;
      }
      return fetch(getUrlForecast(payload)).then(dataResponse=>{
          return dataResponse.json()
      }).then((forecast_data)=>{
          const forecastData = getDataForecast(forecast_data)
          dispatch(setForecastData({city: payload, forecastData}))
      }).catch(()=>{}
    )
  }
}
