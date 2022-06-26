import React from "react";
import Lightswitch from "./Lightswitch";
import './Container.css';
import './Nav.css'
const Nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <h1>AE</h1>
        
        <div className="buttons">
          <button>INICIAR SESION</button>
          <button>REGISTRARSE</button>
        <Lightswitch />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
