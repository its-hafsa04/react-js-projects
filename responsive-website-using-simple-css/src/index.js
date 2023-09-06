import React from "react";
import ReactDOM  from "react-dom";
import Navbar from "./Navbar.jsx";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<React.StrictMode>
<BrowserRouter>
<Navbar />
</BrowserRouter>
</React.StrictMode>
);
