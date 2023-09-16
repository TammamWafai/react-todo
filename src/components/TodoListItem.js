import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ id, todo, onRemoveTodo }) => {
  const handleRemoveClick = async () => {
    const options = {
      method: "DELETE",
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

      onRemoveTodo(id); // Remove the item from the local state
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <li key={id} className={style.ListItem}>
      {todo} <button onClick={handleRemoveClick}>Remove</button>
    </li>
  );
};

TodoListItem.prototype = {
  id: PropTypes.string,
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;