import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokeList from "./components/PokeList";

import Layout from "./components/Layout";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokelist" element={<PokeList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
