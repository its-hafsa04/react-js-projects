import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const next = ()=>{
        navigate('/service');
    }
    return (
        <>
                <section className="home mt-5" id="home">
    <div className="home-section">
        <h3>Welcome To My Page</h3>
       <h4> And I'm a <span>Frontend Developer!</span></h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, aut quisquam? Asperiores fuga 
            illo animi doloremque voluptatibus.</p>
            <button onClick={next}>Get Started</button>
</div>
<div className="home-img">
    <img src="https://tse1.mm.bing.net/th?id=OIP.IhGijgoVTEs0_4rPuUXboQHaE8&pid=Api&P=0&h=220" alt=""/>
</div>
</section>
        </>
    )
};
export default Home;