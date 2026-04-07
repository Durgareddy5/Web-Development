import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {First,Home,About} from './RouterD'


function RouterComp() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link> | <Link to="/about">About</Link>
      </nav>


      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}   export default RouterComp;
