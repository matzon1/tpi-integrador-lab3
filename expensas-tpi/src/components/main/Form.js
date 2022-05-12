import React, { useState } from "react";

import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
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

  const changeCellphone = (event) => {
    console.log(event.target.value);
    setCellphone(event.target.value);
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
    // Acá debería ser la llamada de la api??
  };

  return (
    <div className="login-form">
      <label>Ingrese sus datos</label>
      <form onSubmit={submitHandler}>
        <div className="login-form-items">
          <label>Nombre: </label>
          <input value={name} onChange={changeName} type="text" />
        </div>
        <div className="login-form-items">
          <label>Apellido: </label>
          <input value={surname} onChange={changeSurname} type="text" />
        </div>
        <div className="login-form-items">
          <label>Email: </label>
          <input value={email} onChange={changeEmail} type="email" />
        </div>
        <div className="login-form-items">
          <label>Celular: </label>
          <input value={cellphone} onChange={changeCellphone} type="tel" />
        </div>
        <div className="login-form-items">
          <label>Calle: </label>
          <input value={street} onChange={changeStreet} type="text" />
        </div>
        <div className="login-form-items">
          <label>Número: </label>
          {/* podría ser numero este input  */}
          <input
            value={streetNumber}
            onChange={changeStreetNumber}
            type="number"
            min="1"
            max="10000"
          />
        </div>
        <div className="login-form-items">
          <label>Piso: </label>
          <input
            value={floor}
            onChange={changeFloor}
            type="number"
            min="0"
            max="100"
          />
        </div>
        <div className="login-form-items">
          <label>Depto: </label>
          {/* Mejor que quede en texto y si es numero lo parseamos*/}
          <input value={apartment} onChange={changeApartment} type="text" />
        </div>
        <div className="login-form-items">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
