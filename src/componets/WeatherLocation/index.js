import React, {Component} from 'react'
import {CircularProgress} from '@material-ui/core'
import { PropTypes } from 'prop-types'
import Location from './Location'
import WeatherData from './WeatherData'
import './style.css'
import { getData } from '../../services/weatherLocation'
import { getUrl } from '../../services/getUrlWeatherByCity'

class WeatherLocation extends Component {

    constructor({city}){
        super()
        this.state = {
            city,
            data: null
        }
    }

    componentDidMount = (prevProps, PrevState)=>{
       console.log('componentDidMount')
       this.handleUpdateAPI()
     }

    handleUpdateAPI = ()=>{
      console.log('handleUpdateAPI')
        const {city} = this.state
        fetch(getUrl(city)).then(dataResponse=>{
            return dataResponse.json()
        }).then((weather_data)=>{
            const data = getData(weather_data)
            this.setState({data})
        }).catch(()=>{
        })
    }
    render = ()=>{
      console.log('Render')
      const {city, data} = this.state
        const {onWeatherLocationClick, citySelected} = this.props
        const clase = citySelected ? 'weatherLocationCont selected' : 'weatherLocationCont'
        return (<div className={clase} onClick={onWeatherLocationClick}>
            <Location city={city} />
            { data ? <WeatherData data={data}/> : <CircularProgress />}
        </div>)
    }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation
