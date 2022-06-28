import React, { useEffect, useState } from "react";

import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [consult, setConsult] = useState([]);
  

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

  const changeConsult = (event) => {
    console.log(event.target.value);
    setConsult(event.target.value);
  };
  const sendConsulta = (name, surname, email, cellphone, consult) =>{
    
    if (name.lenght < 2 ){
      return("Inserte un nombre válido");
    }
    if (surname.lenght < 2 ){
      return("Inserte un apellido válido");
    }
    if (!email.includes('@') ){
      return("Inserte un mail válido");
    }
    // if(cellphone.lenght < 6 && !cellphone.typeof(double)){
    //   alert("Inserte un número de celular válido");
    // }
  
    if(consult.lenght < 15){
      return("La consulta tiene que ser más larga");
    }
  };

  const errorMessage = sendConsulta(name, surname, email, cellphone, consult)

  const submitHandler = (event) => {
    event.preventDefault();
  
    sendConsulta(name, surname, email, cellphone, consult);

    //habria que ver de enlazar la data a auth0 y un mail to
    setName("");
    setSurname("");
    setEmail("");
    setCellphone("");
    setConsult("");
  };



  return (
    <div className="login-form">
      <label className="form-title">CONTACTESE CON NOSOTROS</label>
      <form onSubmit={submitHandler}>
        <div className="login-form-items">
          <label>Ingrese su nombre</label>
          <input
          value={name}
          onChange={changeName}
            type="text"
          />
        <p>{errorMessage}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su apellido</label>
          <input
            value={surname}
            onChange={changeSurname}
            type="text"
          />
          <p>{errorMessage}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su numero de Teléfono</label>
          <input
            value={cellphone}
            onChange={changeCellphone}
            type="tel"
          />
         <p>{errorMessage}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su Email</label>
          <input
            value={email}
            onChange={changeEmail}
            type="email"
          />
         <p>{errorMessage}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su consulta</label>
          <textarea
            className="textbox"
            onChange={changeConsult}
          />
        </div>
        <p>{errorMessage}</p>
        <div className="login-form-items">
          <button type="submit" disabled={errorMessage}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
