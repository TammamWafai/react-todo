import React from 'react'

const TodoListItem = ({ key, todo, onRemoveTodo }) => {

    return (
        <>
            <li key={key}>
                {todo}
                <button
                    onClick={() => onRemoveTodo(todo)}>
                    Remove
                </button>
            </li>

        </>
    )
}

export default TodoListItem