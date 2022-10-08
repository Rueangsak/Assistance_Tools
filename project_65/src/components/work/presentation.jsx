import React from 'react'
import PropTypes from 'prop-types'
import AddTodoForm from '../add/AddTodoForm'
import './presentation.css'
import TodoItem from '../add/TodoItem'

const Presentation = (props) => {
  return (
    <div className="presentation-container">
      <div className="presentation-container1">
        <div className="presentation-container2">
          <button className="presentation-button button">{props.button}</button>
        </div>
        <div className="presentation-container3">
          <div className="presentation-container4">
            <AddTodoForm></AddTodoForm>
            {/* <button className="presentation-button1 button">  
              {props.button1}
            </button> */}
          </div>
          <div className="presentation-container5">
            
          </div>
        </div>
      </div>
    </div>
  )
}

Presentation.defaultProps = {
  button: 'My Presentation',
  button1: '+ New presentation',
}

Presentation.propTypes = {
  button: PropTypes.string,
  button1: PropTypes.string,
}

export default Presentation
