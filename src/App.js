

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Observe Airtable API response

      const todos = data.records.map(record => ({
        title: record.fields.title,
        id: record.id,
      }));

      // console.log(todos); // Observe transformed todos array

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message); // Log the error message
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData instead of the previous promise-based code
  }, [todoList]);

  useEffect(() => {
    // if (isLoading === false) {
    // }
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList, isLoading]);


  const removeTodo = async (id) => {
    const options = {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const newList = todoList.filter(item => item.id !== id);
      setTodoList(newList);
    } catch (error) {
      console.error(error.message);
    }
  };


  const addTodo = (newTodo) => {
    setTodoList(todoList => [...todoList, newTodo]);
  };

  //   return (
  //     <>
  //       <h1>Todo list</h1>
  //       <AddTodoForm onAddTodo={addTodo} />
  //       {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
  //     </>
  //   );
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo list</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo} />}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} /> {/* New Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
