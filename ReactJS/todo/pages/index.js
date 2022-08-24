import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Todo from "../components/todo";

export default function Home() {

  const[todo, setTodo] = useState([]);
  const[input, setInput] = useState('');
  


  function onInputChange(e) {
    setInput(e.target.value);
  }
  
  function saveTodo() {  
    setTodo( prev => [input, ...todo] )
    console.log('working');
  }

  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Todo App</h1>
        <input onChange={onInputChange} type="text" />
        <button onClick={saveTodo} >Save</button>
        
        <Todo todo={todo} />        

      </main>
    </div>
  );
}
