//rafce
import React, { useState } from 'react'
import InputWithLabel from './InputWithLabel'

const AddTodoForm = ({ onAddTodo }) => {

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
            // event.target.title.focus()

        }

    }
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel todoTitle={todoTitle} handleTitleChange={handleTitleChange} label="Title">
                <b>Title</b>
            </InputWithLabel>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm