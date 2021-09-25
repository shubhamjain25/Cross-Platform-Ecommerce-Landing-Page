import React from 'react';
import './App.css';
import Card from './components2/card';
import Masonry from "masonry-layout";
import HeadBar from "./HeaderComponents/headbar";
import Navbar from "./HeaderComponents/navbar";

function App() {
  
  console.log('Inside 1');
  return (
    <>
    {/* <Navbar/> */}
    
    <HeadBar/>
    <Card/> 
   
    </>
  );
}

export default App;
