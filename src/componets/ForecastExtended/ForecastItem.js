import React, { Component } from 'react';
import PropTypes from 'prop-types'
import WeatherData from '../WeatherLocation/WeatherData';

class ForecastItem extends Component {

  constructor({weekDay, hour, data}){
    super()
  }
  render(){
    const {weekDay, hour, data} = this.props
    return(
      <div className="div-weatherdata">
        {weekDay} <br/> {hour}
        <div className="div-weatherdata-2">
          <WeatherData data={data} />
        </div>
      </div>
    )
  }
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  data: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      weatherState: PropTypes.string.isRequired,
      humidity: PropTypes.number.isRequired,
      wind: PropTypes.string.isRequired
  })
}

export default ForecastItem
