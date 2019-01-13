import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { Paper } from '@material-ui/core'
import ForecastExtended from './../componets/ForecastExtended'
import { getForecastDataFromCities, getCityState } from './../reducers'

class ForecastExtendedContainer extends Component {

  render(){
    const {city, forecastData} = this.props
    return(
      city &&
        <Col xs={12} md={6}>
          <Paper elevation={5}>
            <div className="details forecast-extended-content">
              <ForecastExtended city={city} forecastData={forecastData}/>
            </div>
          </Paper>
        </Col>
    )
  }

}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array
}

const mapStateToProps = state => ({
  city: getCityState(state),
  forecastData: getForecastDataFromCities(state)
})

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
