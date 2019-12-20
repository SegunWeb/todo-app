import React from "react";
import TodoListItem from '../todo-list-item/TodoListItem'

import './TodoList.css'

const TodoList = ({data, onDeleted, onDone, onImportant}) => {
    const elem = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    onDeleted={() => onDeleted(id)}
                    onDone={() => onDone(id)}
                    onImportant={() => onImportant(id)}
                />
            </li>
        )
    });
    return (
        <ul className="list-group todo-list">
            {elem}
        </ul>
    )
};

export default TodoList;