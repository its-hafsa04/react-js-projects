import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
const navigate = useNavigate();
const home = () =>{
    alert('Form Submitted')
    navigate('/');
}
const navi = useNavigate();
const back =() =>{
    navi(-1);
}
    return (
        <>
            <section id="contact">
                <h1>Contact Form</h1>
                <div className="form">
                    <h3>Name :</h3>
                    <input placeholder="Name" type="text"/>
                    <h3>Phone no. :</h3>
                    <input placeholder="number" type="number"/>
                    <h3>Email :</h3>
                    <input placeholder="email" type="email"/>
                    <h3>Password :</h3>
                    <input placeholder="password" type="password"/>
                    <button onClick={home}>Submit</button>
                    <button onClick={back}>Go Back</button>
                </div>
            </section>
        </>
    )
};
export default Signup;