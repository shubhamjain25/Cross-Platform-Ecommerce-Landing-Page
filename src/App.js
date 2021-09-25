import React from 'react';
import './App.css';
import Card from './components2/card';
import Masonry from "masonry-layout";
import HeadBar from "./HeaderComponents/headbar";
import Navbar from "./HeaderComponents/Navbar/navbar";
import CategoriesBar from "./HeaderComponents/CategoriesBar/categoriesbar";

function App() {
  
  console.log('Inside 1');
  return (
    <>
    <Navbar/>   
    <HeadBar/>
    <CategoriesBar/>
    <Card/> 
    </>
  );
}

export default App;
