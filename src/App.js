import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';



function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [] } });
      }, 2000); // Simulating a 2-second loading delay
    }).then((result) => {
      console.log(result)
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList))
    }
  }, [todoList, isLoading])



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
      {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
    </>
  );
}

export default App;
