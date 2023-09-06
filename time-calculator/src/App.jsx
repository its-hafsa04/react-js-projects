import React, { useState } from "react";
import "./index.css";



const App = () =>{
    let curTime = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(curTime);
const UpdateTime = () =>{
  let  CurTime = new Date().toLocaleTimeString();
    setCTime(CurTime);
}
    return (
        <>
<div>
    <h1>{cTime}</h1>
    <button onClick={UpdateTime}>Get Time</button>
    </div>
</>
    );
    
}

export default App;