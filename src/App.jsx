import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/ReserchTab";
import Filter from "./components/filter";
import HomePage from "./components/HomePage";


const App = () => {
  

  return (
   
    
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/task1" element={<Home />} />
          <Route path="/task2" element={<Filter />} />
        </Routes>
        
      </BrowserRouter>
   
  );
};

export default App;