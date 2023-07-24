import React from 'react'

const TodoListItem = (props) => {
    return (
        <li key={props.key}> {props.todo}</li>
    )
}

export default TodoListItem