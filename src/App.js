import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  // const [newTodo, setNewTodo] = useState()
  const [todoList, setTodoList] = useState([])

  const addTodo=(newTodo)=>{
    setTodoList(todoList=>[...todoList, newTodo] )
  }
  // setTodoList([
  //   { id: 1, title: "Complete assignment" },
  //   { id: 2, title: "Do homework" },
  //   { id: 3, title: "Go to the gym" },
  //   { id: 4, title: "Do laundry" }
  // ])

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p>{newTodo} </p> */}
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
