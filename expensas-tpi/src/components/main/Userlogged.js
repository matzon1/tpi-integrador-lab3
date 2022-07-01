import React from "react";
import "./UserLogged.css";

function Userlogged() {
  return (
    <div className="userloged">
      <div className="container">
        <div className="text-loged">
          <h1>Usted debe: $ </h1>

          <p>
            Como abonar? Debe acercarse a nuestras oficinas ubicadas
            en Pte Roca 796, aceptamos pago en debito o contado
          </p>
          <button>REGISTRAR PAGO</button>
        </div>
      </div>
    </div>
  );
}

export default Userlogged;
