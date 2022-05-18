import React from "react";
import "./Nav.css";




const nav = () => {
  
  return (
    <div>
      <nav className="nav-bar">
        <img className="logo" src="C:\FACU\TPI-LAB\tpi-integrador-lab3\expensas-tpi\src\components\main\isologotipo_blanco.png"></img>
        <div className="buttons">
          <button>Vecinos</button>
          <button>Administrador</button>
        </div>
      </nav>
    </div>
  );
};

export default nav;
