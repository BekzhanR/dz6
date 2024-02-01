import { useState } from 'react'
import {Route,Routes} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Loyout from "./components/Loyout.jsx";
import busket from "./pages/Busket.jsx";
import Busket from "./pages/Busket.jsx";
import Market from "./pages/Market.jsx";

const App = () => {
    return (
        <>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Loyout/>}>
                  <Route index element={<Market/>}/>
                  <Route path="/busket" element={<Busket/>}/>
                  <Route path="*" element={<div><p>404</p></div>}/>
              </Route>
          </Routes>
        </>
    );
};

export default App;