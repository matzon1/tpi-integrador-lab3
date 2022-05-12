import React, { useState } from "react";

import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [streetNumber, setStreetNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [apartment, setApartment] = useState("");

  const changeName = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const changeSurname = (event) => {
    console.log(event.target.value);
    setSurname(event.target.value);
  };

  const changeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const changeStreet = (event) => {
    console.log(event.target.value);
    setStreet(event.target.value);
  };

  const changeStreetNumber = (event) => {
    console.log(event.target.value);
    setStreetNumber(event.target.value);
  };

  const changeFloor = (event) => {
    console.log(event.target.value);
    setFloor(event.target.value);
  };
  const changeApartment = (event) => {
    console.log(event.target.value);
    setApartment(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form">
      Form
      <form onSubmit={submitHandler}>
        <div className="login-form-items">
          <label>Nombre</label>
          <input value={name} onChange={changeName} type="text" />
        </div>
        <div className="login-form-items">
          <label>Apellido</label>
          <input value={surname} onChange={changeSurname} type="text" />
        </div>
        <div className="login-form-items">
          <label>Email</label>
          <input value={email} onChange={changeEmail} type="email" />
        </div>
        <div className="login-form-items">
          <label>Calle</label>
          <input value={street} onChange={changeStreet} type="text" />
        </div>
        <div className="login-form-items">
          <label>Número</label>
          {/* podría ser numero este input  */}
          <input
            value={streetNumber}
            onChange={changeStreetNumber}
            type="text"
          />
        </div>
        <div className="login-form-items">
          <label>Piso</label>
          <input value={floor} onChange={changeFloor} type="text" />
        </div>
        <div className="login-form-items">
          <label>Depto</label>
          {/* Tambien podria ser un numero este input */}
          <input value={apartment} onChange={changeApartment} type="text" />
        </div>
        <div className="login-form-items">
          <button type="subbmit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
