import React from 'react'

const TodoItem = ({ todo, onEditClick, onDeleteClick }) => {
    return (
        <div className='todo'>
        <li className='li' key={todo.id}>
            {todo.text}
            {" "}
            <div className='edit'>
            <button>Open</button>
            <button onClick={() => onEditClick(todo)}>Edit</button>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
            </div>
        </li></div>
    )
}

export default TodoItem
