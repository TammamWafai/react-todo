import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPersistentState = (key, initState) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initState)
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])
  return [value, setValue]
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', [])

  const removeTodo = (id) => {

    const newList = todoList.filter(item => item.id !== id)
    setTodoList(newList)
  }
  const addTodo = (newTodo) => {
    setTodoList(todoList => [...todoList, newTodo])

  }

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
