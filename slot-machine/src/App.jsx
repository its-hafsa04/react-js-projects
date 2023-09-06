import React from "react";
import "./index.css";
import SlotM from "./SlotMach";

const App = () => {
    return (
        <>
            <h1 className="heading_style">
            🎰 Welcome to {" "}
            <span style={{fontWeight: '900', backgroundColor:'white'}}>Slot Machine Game.</span>🎰</h1>
        <div className="slot-machine">
        <SlotM x = ' 😄 ' y = ' 😄 ' z = ' 😄 '/>
        <SlotM x = ' 🐇 ' y = ' 🐫 ' z = ' 🐱 '/>
        <SlotM x = ' 🍎 ' y = ' 🍎 ' z = ' 🍎 '/>
        <SlotM x = ' 🔢 ' y = ' 🥇 ' z = ' 🥇 '/>
        </div>
        </>
    )
};
export default App;