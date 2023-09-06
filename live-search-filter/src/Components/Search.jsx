import React, { useState } from "react";
import SearchResult from "./SearchResult";

function Search(){
    const [img,setImg] = useState('');
    const InputEvent = (event)=>{
        const data = event.target.value;
        console.log(data);
        setImg(data);
    }
return (
    <>
        <div className="search">
            <input type="text" placeholder="Search Anything" 
                value={img} onChange={InputEvent}
            />
           {(img === "")? null : <SearchResult name={img}/> }
        </div>
    </>
)
};
export default Search;