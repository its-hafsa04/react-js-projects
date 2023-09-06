import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import './index.css';

const CreateNote = (props) => {
const [expand,setExpand] = useState(false);

    const [note,setNote] = useState({
        title : " ",
        content : " ",
    });

const InputEvent = (event) => {

    const { name,value } = event.target;

    setNote((prevData) =>{
        return {
            ...prevData,
            [name]: value,
        };
    });
   // console.log(note);
};

const addEvent = (event)=>{
    event.preventDefault();
props.passNote(note);
setNote({
    title : " ",
    content : " ",
});
};

const expandIt = (event) =>{
    event.preventDefault();
setExpand(true);
};

const bToNormal = () =>{
    setExpand(false);
    };

return  (
  <>
    <div className='main_note'  onDoubleClick={bToNormal}>
        <form>
       {expand?
            <input type='text' 
            placeholder='Title'
             onChange={InputEvent} 
             value={note.title} 
             name='title'
                autoComplete='off'
             /> : null}
        <br/>
            <textarea placeholder='Write a note...' 
            onChange={InputEvent} 
            value={note.content}
             rows="" columns="" 
             name='content'
                onClick={expandIt}
             />
          {expand?
            <button onClick={addEvent}>
            <AddIcon className='plus'/></button> : null}
        </form>
    </div>
  </>
  )};

export default CreateNote;
