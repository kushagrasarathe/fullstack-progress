import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
// import Router from "next/router";
import { useState } from "react";

const arr = ["Title1", "title2" ];

export default function Home() {

  const [load, setLoad] = useState(false);
  const [title, setTitle] = useState('');
  const [add, setAdd] = useState(0);
  const [decrease, setDecrease] = useState(0);
  // load is a variable
  // setload is a finction

  // load = false

  function handleAdd() {
    setAdd( () => add+1 );
  }
  
  function handleSub() {
    setAdd( () => add-1 );
  }
  
  function onChange() {
    // load = false
    // false  === true
    setLoad(!load);
    setTitle(arr[1]);
    console.log(load);
  }

  return (
    <>
      {/* <Navbar /> */}
      <h1>Home Page</h1>

      <button onClick={onChange} >Test</button>
      <h2> { title } </h2>
      <br />
      <br />
      <button onClick={handleAdd} >Increase</button>
      <button onClick={handleSub} >Decrease</button>
      <h3> { add } </h3>

      {/* <Footer /> */}
    </>
  );
}
