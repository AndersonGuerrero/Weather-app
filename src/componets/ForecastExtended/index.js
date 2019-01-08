import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import {CircularProgress} from '@material-ui/core'
import {getUrlForecast} from '../../services/getUrlForecastByCity'
import {getDataForecast} from '../../services/forecastExtended'
import '../style.css'

class ForecastExtended extends Component {

  constructor({city}){
    super()
    this.state = {forecastData: null}
  }

  componentDidMount(){
    this.handleUpdateAPI()
  }

  handleUpdateAPI = ()=>{
    console.log('handleUpdateAPI-forecast')
    const {city} = this.props
      fetch(getUrlForecast(city)).then(dataResponse=>{
          return dataResponse.json()
      }).then((forecast_data)=>{
          const forecastData = getDataForecast(forecast_data)
          this.setState({forecastData})
      }).catch(()=>{})
  }

  renderForecastItemDays(){
    const {forecastData} = this.state
    return forecastData.map((val, index) =>
      <ForecastItem key={`${val.weekDay}-${index}`}
        weekDay={val.weekDay} hour={val.hour} data={val.data}/>)
  }

  render(){
      const {city} = this.props
      const {forecastData} = this.state
      return(
        <div className='forecast-content'>
        { city ?
          <div >
            <h2 className='forecast-title'>
              Pronostico Extendido para {city}
            </h2>
            {forecastData ?
              this.renderForecastItemDays() :
              <div className="loader-extended">
                <CircularProgress />
              </div>
            }
          </div>:
          <div>Aca puede ver los detalles de la ciudad</div>
        }
        </div>
      )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended
