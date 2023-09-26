import React, { useState, useEffect } from "react";
import myStyles from "./myStyles.module.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [sortBy, setSortBy] = useState("title");
  const [sortDir, setSortDir] = useState("asc");

  const toggleSortDirection = () => {
    setSortDir(sortDir === "asc" ? "desc" : "asc");
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  async function fetchData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}?view=Grid%20view&sort[0][field]=${sortBy}&sort[0][direction]=${sortDir}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      // console.log(data); // Observe Airtable API response

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.title,
      }));

      console.log(...todos); // Observe transformed todos array

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(error.message); // Log the error message
    }
  }

  useEffect(() => {
    async function fetchDataAndUpdate() {
      await fetchData();
    }

    fetchDataAndUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortDir, sortBy]);

  useEffect(() => {
    // if (isLoading === false) {
    // }
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList, isLoading]);

  const removeTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };

    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const newList = todoList.filter((item) => item.id !== id);
      setTodoList(newList);
      fetchData();
    } catch (error) {
      console.error(error.message);
    }
  };

  const addTodo = (newTodo) => {
    setTodoList((todoList) => [...todoList, newTodo]);
  };

  return (
    <BrowserRouter>
      <nav className={myStyles.navigation}>
        <ul className={myStyles.navList}>
          <li className={myStyles.navItem}>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li className={myStyles.navItem}>
            <Link to="/new">
              <button>New</button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo list</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <div>
                    <label htmlFor="sortDropdown">Sort by:</label>
                    <select
                      id="sortDropdown"
                      value={sortBy}
                      onChange={handleSortChange}
                    >
                      <option value="title">Title</option>
                      <option value="date">Date</option>
                    </select>
                    <button onClick={toggleSortDirection}>
                      {sortDir === "asc" ? "↑" : "↓"}
                    </button>
                  </div>
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                </>
              )}
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
