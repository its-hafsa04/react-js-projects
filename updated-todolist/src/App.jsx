import React, { useState, useEffect } from "react";
import "./App.css";
import AddIcon from '@mui/icons-material/Add';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [isDeletingAll, setIsDeletingAll] = useState(false);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("todoItems") || "[]");
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  const editItem = (index) => {
    setEditIndex(index);
    setInputValue(items[index]);
  };

  const updateItem = () => {
    const updatedItems = [...items];
    updatedItems[editIndex] = inputValue;
    setItems(updatedItems);
    setInputValue("");
    setEditIndex(null);
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const deleteAllItems = () => {
    if (isDeletingAll) {
      setItems([]);
    } else {
      setIsDeletingAll(true);
    }
  };

  return (
    <div className="App">
    <div className="center">
    <figure>
        <img src="https://media.istockphoto.com/id/1363738494/photo/checking-off-a-to-do-list-on-a-clipboard-with-a-red-check-mark.webp?b=1&s=170667a&w=0&k=20&c=ANNMfQ_11j-u1qSX8YdrvqTYNosRe_BK-8mPnX2DSJ4="/>
        <figcaption>Add Your List Items Here 👇</figcaption>
      </figure>
      <div className="input-container">
        <input
          type="text"
          placeholder="✍️ Add item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" onClick={editIndex !== null ? updateItem : addItem}>
          {editIndex !== null ? <EditCalendarIcon /> : <AddIcon/>}
        </button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>
            {editIndex === index ? (
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            ) : (
              item
            )}
            <div className="buttons">
              <button className="active-button" onClick={() => editItem(index)}>
                <EditCalendarIcon />
              </button>
              <button className="action-button" onClick={() => deleteItem(index)}>
                <DeleteForeverIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="delete-all-button" onClick={deleteAllItems}>
        {isDeletingAll ? "Delete All" : "Check List"}
      </button>
    </div>
    </div>
  );
}

export default App;
