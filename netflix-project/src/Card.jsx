import React from "react";

function Card(props){
    return (
        <div className="cards">
<div className="card">
<img src={props.imgsrc} alt="my-pic" className="card-img" />
<div className="card-info">
<p><span className="card-category">{props.title}</span></p>
<h3 className="card-title"> {props.sname}</h3>
<a href={props.link} target="_blank">
    <button>Watch Now</button>
</a>
</div>
</div>
</div>
    );
}
export default Card;