import React from 'react';

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
                    return <li key={item.id}> {item.title}</li>
                })}
            </ul>
        </>
    );
}

export default TodoList;
