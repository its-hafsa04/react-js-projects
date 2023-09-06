import React from "react";

const SlotM = (propes) => {
   // let x = propes.x ;
   // let y = propes.y ;
   // let z = propes.z ;
   let { x,y,z } = propes;   //object destructuring.
if( (propes.x === propes.y) && (propes.y === propes.z)){
        return (
            <>
                <div className="slot-div">
<h1> {propes.x} {propes.y} {propes.z}</h1>
<h2>This is Matching.</h2>
<hr/>
                </div>
            </>
        );
    }else{
        return (
            <>
                <div className="slot-div">
<h1> {propes.x} {propes.y} {propes.z}</h1>
<h2>This is not Matching.</h2>
<hr/>
                </div>
            </>
        );
    }

}
export default SlotM;