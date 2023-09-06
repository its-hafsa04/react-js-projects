import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const List =(props) =>{

    const [line,setLine] = useState(false);

const cutIt = ()=> {
    setLine(true);
}

return(
    <div className="todo">
    <span onClick={cutIt}> <DeleteIcon className="del"/></span>
    <li style={{textDecoration: line ? "line-through" : "none"}}>{props.text}</li>
    </div>
);

};
export default List;