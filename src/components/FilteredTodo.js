import { Switch } from "antd";
import React from "react";

function FilteredTodo (props) {
    return <div>
        Show All
         <Switch  checked={props.isFiltered} onChange={() => props.setIsFiltered(!props.isFiltered)}></Switch>
    </div>
};

export default FilteredTodo;