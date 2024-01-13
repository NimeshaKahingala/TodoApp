import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const listItems = props.todoList.map((todo) => {
        return <TodoItem todo={todo} handleUpdates={props.handleUpdates} checked={todo.isChecked} />
    })


    return <div>
        {listItems}
    </div>
};

export default TodoList;