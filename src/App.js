import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState, useEffect} from 'react';
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getDataTodo();
  }, []);

  function getDataTodo(){
    db.collection("todos").onSnapshot(function(querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e){
    e.preventDefault();
    
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");

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
          style={{maxWidth: "400px", width:"90vw"}}
        />
        <Button 
          type="submit"
          variant="contained" 
          onClick={addTodo}
          style={{display: "none"}}
        >
          Default
        </Button>
      </form>

      {todos.map((todo) => (
        <TodoListItem 
          todo={todo.todo} 
          inprogress={todo.inprogress} 
          id={todo.id}
        />
      ))}
     </div>
    </div>
  );
}

export default App;
