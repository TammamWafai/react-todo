//rafce
import React, { useState } from 'react'

const AddTodoForm = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = useState('')

    const handleTitleChange = (event) => {
        var newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (todoTitle !== "") {
            onAddTodo({ id: Date.now(), title: todoTitle })
            setTodoTitle("")
            event.target.title.focus()
            
        }

    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input
                id="todoTitle"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}>
            </input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm