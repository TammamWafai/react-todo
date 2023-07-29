import React from 'react'

const TodoListItem = ({ key, todo }) => {
    return (
        <li key={key}> {todo}</li>
    )
}

export default TodoListItem