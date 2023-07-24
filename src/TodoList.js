import React from 'react';
import TodoListItem from './TodoListItem';

var todoList = [
    { id: 1, title: "Complete assignment" },
    { id: 2, title: "Do homework" },
    { id: 3, title: "Go to the gym" },
    { id: 4, title: "Do laundry" }
]

function TodoList() {
    return (
        <>
            <ul>
                {todoList.map(function (item) {
                    return <TodoListItem key={item.id} todo={item.title} />
                })}
            </ul>
        </>
    );
}

export default TodoList;
