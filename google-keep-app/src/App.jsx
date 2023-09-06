import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';

const App = () => {
  const [addItem,setAddItem] = useState([]);

const addNote =(note) => {
  //alert("I'm clicked");
  setAddItem((prevData)=>{
return [...prevData, note];
  });
  //console.log(note);
};
const onDelete = (id) =>{
setAddItem((oldData)=>
oldData.filter((curData,index) =>{
  return index !== id;
}))
};

return  (
  <>
    <Header/>
    <CreateNote passNote={addNote}/>

   { addItem.map((val, index)=>{
return (<Note
  key={index}
  id={index}
  title={val.title}
  content={val.content}
  deleteItem={onDelete} />)
    })}
    
    <Footer/>
  </>
  )};

export default App;
