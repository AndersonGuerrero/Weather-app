import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import {setCity} from './../actions'
import LocationList from './../componets/LocationList'

class LocationListContainer extends Component {

  onWeatherLocationClick = (city)=>{
    this.props.setCity(city)
  }

  render(){
    const {cities, city} = this.props
    return(
      <Col xs={12} md={ city ? 6 : 12 }>
        <LocationList
        onWeatherLocationClick={this.onWeatherLocationClick}
        cities={cities}/>
      </Col>
    )
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.string
}

const mapDispatchToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
})

const mapStateToProps = state => ({
  city: state.city
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer)
