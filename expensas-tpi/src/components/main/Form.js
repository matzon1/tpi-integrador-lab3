import React, { useEffect, useState } from "react";

import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [consult, setConsult] = useState([]);

  const errorName = validName(name);
  const errorSurname = validSurname(surname);
  const errorCellphone = validCellphone(cellphone);
  const errorEmail = valiEmail(email);
  const errorConsulta = valiConsulta(consult);

  return (
    <div className="login-form">
      <label className="form-title">CONTACTESE CON NOSOTROS</label>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          validName(name);
        }}
      >
        <div className="login-form-items">
          <label>Ingrese su nombre</label>
          <input
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            type="text"
          />
          <p>{errorName}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su apellido</label>
          <input
            value={surname}
            onChange={(ev) => setSurname(ev.target.value)}
            type="text"
          />
          <p>{errorSurname}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su numero de Teléfono</label>
          <input
            value={cellphone}
            onChange={(ev) => setCellphone(ev.target.value)}
            type="tel"
          />
          <p>{errorCellphone}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su Email</label>
          <input value={email} onChange={(ev) => setEmail(ev.target.value)} type="email" />
          <p>{errorEmail}</p>
        </div>
        <div className="login-form-items">
          <label>Ingrese su consulta</label>
          <textarea className="textbox" onChange={(ev) => setConsult(ev.target.value)} />
        </div>
        <p>{errorConsulta}</p>
        <div className="login-form-items">
          <button type="submit" disabled={errorName}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

const validName = (name) => {
  if (name.length < 2) return "malaso";
};

const validSurname = (surname) => {
  if (surname.length < 5) return "error";
};

const validCellphone = (cellphone) => {
  if (cellphone.length < 7) return "numero de telefono incorrecto";
};

const valiEmail = (email) => {
  if (!email.includes('@')) return "email incorrecto";
}

const valiConsulta = (consult) => {
  if (consult.length < 10) return "ingrese una consulta mas larga";
}
export default Form;
