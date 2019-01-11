import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col } from 'react-flexbox-grid';
import { Paper } from '@material-ui/core'
import ForecastExtended from './../componets/ForecastExtended'

class ForecastExtendedContainer extends Component {

  render(){
    const {city} = this.props
    return(
      city &&
        <Col xs={12} md={6}>
          <Paper elevation={5}>
            <div className="details forecast-extended-content">
              <ForecastExtended city={city}/>
            </div>
          </Paper>
        </Col>
    )
  }

}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  city: state.city
})

export default connect(mapStateToProps, null)(ForecastExtendedContainer)
