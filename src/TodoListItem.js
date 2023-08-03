import React from 'react'

const TodoListItem = ({ id, todo, onRemoveTodo }) => {

    return (
        <>
            <li key={id}>
                {todo}  <button
                    onClick={() => onRemoveTodo(id)}>
                    Remove
                </button>
            </li>

        </>
    )
}

export default TodoListItem