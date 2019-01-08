import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Location = ({ city })=>(
    <div className="locationCont">
        <h3>{city}</h3>
    </div>
)

Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location