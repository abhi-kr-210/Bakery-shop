import React from "react";
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from "./Pages/Homes/Homes";


import About from "./Pages/About";
import OurMenu from "./Pages/OurMenu";

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourmenu" element={<OurMenu />} />

       
    </Routes>
    </BrowserRouter>
  );
}

export default App;
