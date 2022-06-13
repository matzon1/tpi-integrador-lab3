import React from "react";
import "./Nav.css";

const nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <h1>Expensas</h1>
        <div className="buttons">
          <button>INICIAR SESION</button>
          <button>REGISTRARSE</button>
        </div>
      </nav>
    </div>
  );
};

export default nav;
