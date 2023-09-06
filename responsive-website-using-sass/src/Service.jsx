import React from "react";
import { NavLink } from "react-router-dom";

const Service=() =>{
    return(
<>

<div className="container-fluid mb-5 mt-5">
<section id="service">
<h3 style={{textAlign:'center',color:'blue'}}>Our Services</h3><br/>
  <div className="row col-md-10 mx-auto">
  <div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse2.mm.bing.net/th?id=OIP.yc7Tci32r-JCaWGSabAbLwHaEJ&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">HTML</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
<div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse1.mm.bing.net/th?id=OIP.5qILGrVMZNYcd4WNBrl0RQHaE7&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">CSS</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
  </div>
</div>
<div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse1.mm.bing.net/th?id=OIP.zEUF5KzBX3q2PDWQ3T0YTQHaEW&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Javascript</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
</div>
<div className="row gy-2 col-md-10 mx-auto">
<div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse4.mm.bing.net/th?id=OIP.4tZTN3b1DSbyKHNzmqFQWQHaE7&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">C</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
  </div>
</div>
<div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse4.mm.bing.net/th?id=OIP.QeEztA_4amk6JTzhj6TtpgHaF7&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">C++</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
  </div>
</div>
<div className="row col-md-4 col-10 mx-auto">
<div className="card">
  <img src="https://tse3.mm.bing.net/th?id=OIP.a5_5jUZkq8LGh_FOYCUGZgHaFj&pid=Api&P=0&h=220" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">React JS</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to='/' className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
</div>
</section>
</div>

</>
    )
};
export default Service;