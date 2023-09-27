import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <>
      <ul>
        {todoList.map(function (item) {
          return (
            <TodoListItem
              key={item.id}
              id={item.id}
              todo={item.title}
              onRemoveTodo={onRemoveTodo}
            />
          );
        })}
      </ul>
    </>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
