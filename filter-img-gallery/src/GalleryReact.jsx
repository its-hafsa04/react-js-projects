import React, { useState } from 'react';
import Menu from './Menu';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const GalleryReact = () => {

    const[items,setItems] = useState(Menu);

    const filterItem = (cateItem) =>{
        const updatedItems = Menu.filter((curElem)=>{
            return curElem.category === cateItem; 
        });
        setItems(updatedItems);
    }

  return (
    <>
        <h1 className='mt-5 text-center main-heading'>Order your favorite dish</h1>
        <hr />
        <div className='menu-tabs container'>
<div className='menu-tab d-flex justify-content-around'>
<button className='btn btn-warning' onClick={() => filterItem('Breakfast')}>Breakfast</button>
<button className='btn btn-warning' onClick={() => filterItem('evening')}>Lunch</button>
<button className='btn btn-warning' onClick={() => filterItem('dinner')}>Dinner</button>
<button className='btn btn-warning' onClick={() => filterItem('dessert')}>Desserts</button>
<button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button>
</div>
        </div>

{/*main items section*/}

<div className="menu-items container-fluid mt-5">
    <div className="row">
        <div className="col-11 mx-auto">
            <div className="row my-5">

{
    items.map((elem)=>{
const {id,name,image,description,price} = elem;
return(
    <>
    <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
<div className="row Item-inside">
{/*for image*/}
<div className="col-12 col-md-12 col-lg-4 img-div">
<img src={image} alt="pics" className='img-fluid' />
</div>
{/*Menu description*/}

   <div className="col-12 col-md-12 col-lg-8">
    <div className="main-title pt-4 pb-3">
<h2>{name}</h2>
<p>{description}</p>
    </div>

<div className="menu-price-book">
    <div className="price-book-divide d-flex justify-content-between">
        <h3>{price}</h3>
        <a href="#"><button className='btn btn-primary'>Order Now</button></a>
    </div>
    <p>Prices may vary on selected dates.</p>
</div>

   </div>
</div>
            </div>
    </>
)
    })
}

            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default GalleryReact;