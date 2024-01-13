import React, { useState } from "react";
import { Button, Input } from 'antd';
import { v4 as uuid } from 'uuid';

function AddTodo (props) {

    const [newTodo, setNewTodo] = useState("");
    const uniqueID = uuid();

    const clickAddButton = ()=> {
        props.addTodo({id:uniqueID, todoText:newTodo, isChecked:false});
    }



    return <div className="input">
        <Input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <Button className="btn-add" onClick={clickAddButton}>ADD</Button>
    </div>
};

export default AddTodo;