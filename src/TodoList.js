import React from 'react';
import TodoListItem from './TodoListItem';

function dynamicSort(property) {
    return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    }
}

function TodoList({ todoList, onRemoveTodo }) {

    return (
        <>

            <ul>
                {todoList.map(function (item) {
                    return <TodoListItem id={item.id} todo={item.title} onRemoveTodo={onRemoveTodo} />
                })}
            </ul>
        </>
    );
}

export default TodoList;
