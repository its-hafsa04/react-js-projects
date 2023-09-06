import React, { useState } from "react";
import { questions } from "./API";
import "./Accordion.css";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
  const [data,setData] = useState(questions);
return (
<>
<section>
<div className="container">
<h1>React Interview Questions</h1>
<br/>
  {
    data.map((curElement) =>{
      const {id}  = curElement;
return <MyAccordion key={id} {...curElement}/>;
    })
  }
  </div>
  </section>
</>
);
};
export default Accordion;