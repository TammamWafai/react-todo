//rafce

import React from 'react'
const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        var todoList = event.target.title.value
        console.log(todoList)
        props.onAddTodo(todoList)
        event.target.title.value = ""
        event.target.title.focus()

    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id="todoTitle" name="title"></input>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm