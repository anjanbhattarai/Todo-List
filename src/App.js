// import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import List from './components/List';
import React, {useState} from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1> Anjan's Todo List!</h1>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <List todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
