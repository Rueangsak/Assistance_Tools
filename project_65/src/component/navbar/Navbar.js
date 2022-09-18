import React from 'react'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar-navbar navbar-container">
      <div className="max-width">
        <span className="navbar-text brand-Name">
          <span className="navbar-text1">KU - Teaching Media</span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <div className="navbar-links">
          <span className="navbar-text3 navbar-Link">{props.text}</span>
          <span className="navbar-text4 navbar-Link">{props.text1}</span>
          <button className="button-secondary button">{props.button}</button>
          <button className="button button-primary">{props.button1}</button>
        </div>
        {/* <div className="navbar-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar-icon">
            <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
          </svg>
        </div> */}
      </div>
    </div>
  )
} 

Navbar.defaultProps = {
  text: 'Features',
  text1: 'Blog',
  button: 'Log in',
  button1: 'Get started',
}

Navbar.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Navbar;
