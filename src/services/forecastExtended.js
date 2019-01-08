import moment from 'moment'
import 'moment/locale/es';
import {getWeatherState, getTemperature} from './weatherLocation'

const getHour = (dt)=>{
  return moment.unix(dt).utc().format('hA')
}

const getWeekDay = (dt)=>{
  return moment.unix(dt).utc().format('ddd')
}

const getDataForecast = data =>(
  data.list.filter((val)=>
    moment.unix(val.dt).utc().hour() === 6 ||
    moment.unix(val.dt).utc().hour() === 12 ||
    moment.unix(val.dt).utc().hour() === 18
  ).map(val =>{
    return {
      weekDay:getWeekDay(val.dt),
      hour: getHour(val.dt),
      data:{
        humidity: val.main.humidity,
        weatherState: getWeatherState(val.weather[0]),
        temperature: getTemperature(val.main.temp),
        wind: `${val.wind.speed} m/s`}
    }
  })
)

export { getDataForecast }
