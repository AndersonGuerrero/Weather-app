import convert from 'convert-units'
import { SUN, CLOUD, RAIN, SNOW, THUNDER, DRIZZLE } from '../constans/weathers'

const getWeatherState = weather =>{
    const {id} =  weather
    if(id < 300){
      return THUNDER
    }else if (id < 400){
      return DRIZZLE
    }else if(id < 600){
      return RAIN
    }else if(id < 700){
      return SNOW
    }else if(id === 800){
      return SUN
    }else{
      return CLOUD
    }
}

const getTemperature = kelvin =>{
    return parseFloat(convert(kelvin).from('K').to('C').toFixed(0))
}

const getData = (weather_data)=>{
    const { humidity, temp } = weather_data.main
    const { speed } = weather_data.wind
    const weatherState = getWeatherState(weather_data.weather[0])
    const temperature = getTemperature(temp)
    const data = {
        temperature,
        weatherState,
        humidity,
        wind: `${speed} m/s`
    }
    return data
}

export { getData, getWeatherState, getTemperature}
