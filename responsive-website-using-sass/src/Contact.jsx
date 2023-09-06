import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const [data,setData]= useState({
        Name:'',
        Phone:'',
        Email:'',
        Password:''
    });

    const navigate = useNavigate();
    const home = () =>{
        alert('Form Submitted')
        navigate('/');
    }

const InputEvent =(event) =>{
    const {name,value} = event.target;
    setData((preVal)=>{
        return{
            ...preVal,
            [name] : value,
        }
    })
}

 const formSubmit = (e)=>{
e.preventDefault();
alert(`My Name is ${data.name}. My Phone no. is ${data.Phone}. My Email id is ${data.Email}.
 It's password is ${data.Password}.`)
 }
    return (
        <>
        <div className="my-5">
        <div className="text-center form">
        <form onSubmit={formSubmit}>
        <h3>Contact Us</h3>
                <br/>
                    <h6>Name :</h6>
                    <input placeholder="Name" name="name"
                    value={data.Name} onChange={InputEvent} type="text"/>
                    <br/>
                    <h6>Phone no. :</h6>
                    <input placeholder="number" name="number"
                    value={data.Phone} onChange={InputEvent} type="number"/>
                    <br/>
                    <h6>Email :</h6>
                    <input placeholder="email" name="email"
                    value={data.Email} onChange={InputEvent} type="email"/>
                    <br/>
                    <h6>Password :</h6>
                    <input placeholder="password" name="password"
                    value={data.Password} onChange={InputEvent} type="password"/>
                    <br/>
                    <button onClick={home}>Submit</button>
                    </form>
            </div>
            </div>
        </>
    )
};
export default Contact;

{/* */}