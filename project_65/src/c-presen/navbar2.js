import React from 'react'

import PropTypes from 'prop-types'

import '../CSS/navbar2.css'

const Navbar2 = (props) => {
  return (
    <div className="navbar2-container">
      <div className="navbar2-navbar navbar-container">
        <div className="navbar2-max-width max-width">
          <span className="navbar2-text">presentation</span>
            <button className="navbar2-button button">{props.button1}</button>
            <button className="navbar2-button1 button">{props.button}</button>
        </div>
      </div>
    </div>
  )
}

Navbar2.defaultProps = {
  button: 'Presentation',
  button1: 'Save',
}

Navbar2.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Navbar2
