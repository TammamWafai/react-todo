import React from 'react';
import TodoListItem from './TodoListItem';



function TodoList({ todoList, onRemoveTodo }) {
    return (
        <>

            <ul>
                {todoList.map(function (item) {
                    return <TodoListItem key={item.id} todo={item.title} onRemoveTodo={onRemoveTodo} />
                })}
            </ul>
        </>
    );
}

export default TodoList;
