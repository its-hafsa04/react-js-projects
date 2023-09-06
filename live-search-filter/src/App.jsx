import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";
import Error from "./Components/Error";
import './index.css';

const App = () => {
    return (
        <div>
           <Routes>
           <Route path="/" element={<Home/>} >
        <Route path="/search" element={<Search/>}/ >
            <Route path="*" element={<Error/>}/>
            </Route>
           </Routes>
        </div>
    )
};
export default App;