import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";

export const SignInForm = () => {
  const [email, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const changeUserEmail = (event) => {
    console.log(event.target.value);
    setUserEmail(event.target.value);
  };
  const changeUserPassword = (event) => {
    console.log(event.target.value);
    setUserPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Aca iria el llamado a la api??
  };
  return (
    <div className="sign-in-form">
      <label>Inicie sesión</label>
      <form onSubmit={submitHandler}>
        <div className="sign-in-items">
          <label>Email: </label>
          <input value={email} onChange={changeUserEmail} type="email" />
        </div>
        <div className="sign-in-items">
          <label>Contraseña: </label>
          <input
            value={userPassword}
            onChange={changeUserPassword}
            type="password"
          />
        </div>
        <div className="sign-in-items">
          <button type="submit">Aceptar</button>
        </div>
      </form>
    </div>
  );
};
