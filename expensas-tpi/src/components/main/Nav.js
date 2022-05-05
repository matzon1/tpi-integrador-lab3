import React from "react";
import "./Nav.css";

const nav = () => {
  return (
    <div>
      <nav className="nav-bar">
        <h1>EXPENSAS ONLINE</h1>
        <div className="buttons">
          <button>Vecinos</button>
          <button>Administrador</button>
        </div>
      </nav>
    </div>
  );
};

export default nav;
