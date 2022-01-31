import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import PokeList from "./PokeList"
import Layout from "./Layout";
import Home from "./Home";
import './App.css'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemons" element={<PokeList/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
