import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const contact = () =>{
        navigate('/signup');
    }
    return (
        <>
            <section id="proFile">
                <h1> Profile </h1>
                <div className="profile">
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation<br/> Fllamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatin voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src="https://tse2.mm.bing.net/th?id=OIP.RRgsaCzWDRyT8TQRdd8LuAHaHa&pid=Api&P=0&h=220" />
                </div>
                <button onClick={contact}>Go to Next</button>
            </section>
        </>
    )
};
export default Profile;