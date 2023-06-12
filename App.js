import React,{useState} from "react";
import ReactDOM from "react-dom"
import './styles.css';

function App() {

  const [inputText,setInputText]= useState("");
  const [items,setItems]=useState([]);

    function handleChange(event){
      const newValue = event.target.value;
      setInputText(newValue);
     }

    function addItem(){
      setItems(prevItems=>{
        return [...prevItems,inputText];
      });
      setInputText("");
    }
    function removeItem(index) {
      setItems((prevItems) => {
        return prevItems.filter((item, i) => i !== index);
      });
    }
  return (
    <div>
      <h1>To-Do List</h1>
      <input type="text" onChange={handleChange} placeholder="Enter Task" value={inputText}></input>
      <span>
        <button id="add" onClick={addItem}>
          Add
        </button>
      </span>
      <div>
        <ul>
        {items.map((todoItem, index) => (
            <li key={index}>
              {todoItem}
              <button id="remove" onClick={() => removeItem(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default App;