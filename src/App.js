import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";

function App() {

  const [todoInput, setTodoInput] = useState("");

  function addTodo(e){
    e.preventDefault();
    
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    

  }


  return (
    <div className="App" 
    style={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      alignItems: "center",
      }}
      >
     <div>
     <h1>-To Do List-</h1>
      <form>
        <TextField 
          id="standard-basic" 
          label="Write a To Do..." 
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          style={{maxWidth: "300px", width:"90vw"}}
        />
        <Button 
          type="submit"
          variant="contained" 
          onClick={addTodo}
          style={{display: "none"}}>
          Default
        </Button>
      </form>
     </div>
    </div>
  );
}

export default App;
