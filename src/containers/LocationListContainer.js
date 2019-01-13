import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { setSelectedCity, setWeather } from './../actions'
import { getWeatherCities } from './../reducers'
import LocationList from './../componets/LocationList'

class LocationListContainer extends Component {

  componentDidMount(){
    this.props.setWeather(this.props.cities)
  }

  onWeatherLocationClick = (city)=>{
    this.props.setCity(city.name)
  }

  render(){
    const {citiesWeather, city} = this.props
    return(
      <Col xs={12} md={ city ? 6 : 12 }>
        <LocationList
        onWeatherLocationClick={this.onWeatherLocationClick}
        cities={citiesWeather}/>
      </Col>
    )
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
  city: PropTypes.string
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
})

const mapStateToProps = state => ({
  city: state.city,
  citiesWeather: getWeatherCities(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
