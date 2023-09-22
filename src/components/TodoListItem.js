import React from "react";
import style from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ id, todo, onRemoveTodo }) => {
  const handleRemoveClick = async () => {
    onRemoveTodo(id);
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
