import React from "react";
import { useNavigate } from "react-router-dom";


const About = () => {
    const navigate = useNavigate();
    const next = ()=>{
        navigate('/contact');
    }
    return (
        <>
    <section className="home mt-5" id="home">
<div className="home-section">
    <h3>Hello! It's me <em style={{color:'blue'}}>Hafsa Sajid</em></h3>
   
    <h3> And I'm a <span>Frontend Developer!</span></h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aut quisquam? Asperiores fuga 
        illo animi doloremque voluptatibus.</p>
        <button onClick={next}>Contact Now</button>
</div>
<div className="home-img">
<img src="https://tse4.mm.bing.net/th?id=OIP.jZP8enDDRCcDzJ2PkXmYRwHaE8&pid=Api&P=0&h=220" alt=""/>
</div>
</section>
        </>
    )
};
export default About;
