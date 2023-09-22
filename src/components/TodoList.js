import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

// function dynamicSort(property) {
//     return function (a, b) {
//         return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//     }
// }

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
