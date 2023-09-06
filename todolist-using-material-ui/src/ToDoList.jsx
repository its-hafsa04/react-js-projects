import React, { useState } from "react";
import "./index.css";
import AddIcon from '@mui/icons-material/Add';
import List from "./List";

const ToDoList = () =>{

const [item, setItem] = useState('');
const [newItem, setNewItem] = useState([]);


const itemEvent =(event)=>{
setItem(event.target.value);
};

const itemsList = () =>{
setNewItem((preValue) =>{
    return [...preValue, item];
})
setItem(" ");
};

    return (
        <>
            <div className="main">
                <div className="center">
                <br/>
                    <h1>todo list.</h1>
                    <br/>
                    <input type="text" placeholder="Add an item" value={item}
                        onChange={itemEvent} />
                    <button className="aBtn" onClick={itemsList}><AddIcon/></button>
                    <br/>
                    <br/>
                    <ol>
                        {
                            newItem.map((value,index)=>{
                                return <List key={index} text={value} />;}
                            )
                        };
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
    
};
export default ToDoList;
