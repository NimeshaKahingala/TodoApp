import React, { useState } from "react";
import './Todo.scss';
import { Button, Checkbox, Input, DatePicker } from "antd";

function TodoItem(props) {

    const [isUpdate, setIsUpdate] = useState(false);
    const [updatedText, setUpdatedText] = useState(props.todo.todoText);
    const [updatedDate, setUpdateDate] = useState(props.todo.date);
    // const [remainingDates, setRemainingDates] = useState("");

    const onClickSaveButton = () => {
        // console.log("save")
        // props.updatedTodo(props.todo.id, updatedText);
        // props.handleUpdates(props.todo.id, "update text", updatedText);
        props.handleUpdates(props.todo.id, "update text", {updatedText:updatedText,updatedDate});
        setIsUpdate(false);
    }

    const onChange = (date, dateString) => {
        setUpdateDate(dateString);
        console.log(date, dateString);

    };

    const remainingDates = function (date1, date2) {
        const dt1 = new Date(date1);
        const dt2 = new Date(date2);
        return Math.floor(
          (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
            Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
            (1000 * 60 * 60 * 24)
        );
      };



    return <div className="todo-item">
        <Checkbox checked={props.checked} onChange={() => props.handleUpdates(props.todo.id, "checkbox value", {checked:!props.checked})} />
        {isUpdate ? <><Input value={updatedText} onChange={(e) => setUpdatedText(e.target.value)} />
            <DatePicker onChange={onChange}/>
        </>
            : <><div className="todo-text">{props.todo.todoText}</div> <div className="date">{props.todo.date}</div></>}

        <div>Remaining dates: {remainingDates(new Date(),props.todo.date)}</div>

        {isUpdate ? <> <Button className="btn" onClick={onClickSaveButton}>Save</Button>
            <Button className="btn" onClick={() => setIsUpdate(false)}>Cancel</Button></>
            : <Button className="btn" onClick={() => setIsUpdate(true)}>Update</Button>}

        <Button className="btn" onClick={() => { props.handleUpdates(props.todo.id, "delete") }}>Delete</Button>
    </div>
};

export default TodoItem;