import React from "react";
import { NavLink, Route, Routes, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Lightswitch from "./Lightswitch";
import Main from "./Main";

import "./Container.css";
import "./Nav.css";


const Nav = () => {
  const [mostrarComponente, setMostrarComponente] = useState(true);
  return (
    <div>
      <BrowserRouter>
        <Routes>
         {/*  <Route path="/login" element={<Login />} /> */}
        </Routes>

        <nav className="nav-bar">
          <h1>AE</h1>

          <div className="buttons">
         {/*    <button onClick={() => setMostrarComponente(!mostrarComponente)}>
              INICIAR SESION
            </button> */}
            <NavLink to="/login">
                {mostrarComponente ? <button onClick={() => setMostrarComponente(!mostrarComponente)}>
              INICIAR SESION
            </button> : <Login/>}
              </NavLink>
            <Lightswitch />
          </div>
        </nav>
      </BrowserRouter>
    </div>
  );
};

export default Nav;
