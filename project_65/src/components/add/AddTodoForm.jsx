import React from 'react'

const AddTodoForm = ({ todo, onAddFormSubmit, onAddInputChange }) => {
    return (
        <form onSubmit={onAddFormSubmit}>
          <input 
            type="text" 
            name="todo" 
            placeholder="New file"
            value={todo} 
            onChange={onAddInputChange}
          />
          <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm
