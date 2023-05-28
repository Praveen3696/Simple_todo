// Write your code here
import React from 'react'
import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details

  const handleClick = () => {
    deleteTodo(id)
  }
  return (
    <li>
      <p>{title}</p>
      <div>
        <button onClick={handleClick}>Delete</button>
      </div>
    </li>
  )
}
export default TodoItem
