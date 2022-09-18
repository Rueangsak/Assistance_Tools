import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <div className="component-content">
        <h1 className="component-title">
          <span className="component-text">
            Teaching Media Assistance Online Tools
          </span>
        </h1>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="component-image"
        />
        <div className="component-container1">
          <button className="button button-gradient">{props.button}</button>
          <button className="button button-transparent">{props.button1}</button>
        </div>
      </div>
    </div>
  )
}

AppComponent.defaultProps = {
  image_src:
    'image/Pngtree-comp1.png',
  image_alt: 'image',
  button: 'Get started',
  button1: 'Log in',
}

AppComponent.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default AppComponent
