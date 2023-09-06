import React, { useState } from "react";
import "./index.css";



const App = () =>{
    let Time = new Date().toLocaleTimeString();
const[cTime, setTime] = useState(Time);

const updateTime=() => {
    Time = new Date().toLocaleTimeString();
    setTime(Time);
};
setInterval(updateTime, 1000);
    return (
        <>
<div>
<h1 style={{marginBottom:"70px"}}>Digital Clock</h1>
    <h1>{cTime}</h1>
    </div>
</>
    );
    
}

export default App;