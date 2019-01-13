import React from 'react';
import PropTypes from 'prop-types'
import ForecastItem from './ForecastItem'
import { CircularProgress } from '@material-ui/core'
import '../style.css'

const renderForecastItemDays = forecastData =>(
  forecastData.map((val, index) =>
    <ForecastItem
      key={`${val.weekDay}-${index}`}
      weekDay={val.weekDay} hour={val.hour}
      data={val.data}/>)
)

const ForecastExtended = ({city, forecastData})=>(
  <div className='forecast-content'>
    { city ?
      <div >
        <h2 className='forecast-title'>
          Pronostico Extendido para {city}
          </h2>
      {forecastData ?
        renderForecastItemDays(forecastData) :
        <div className="loader-extended">
          <CircularProgress />
        </div>
      }
    </div>:
    <div>Aca puede ver los detalles de la ciudad</div>
  }
  </div>
)

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
}

export default ForecastExtended
