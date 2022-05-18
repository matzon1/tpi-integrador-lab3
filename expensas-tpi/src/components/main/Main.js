import React from "react";
import { SignInForm } from "../SignInForm";

import Form from "./Form";
import "./Main.css";

const main = () => {
  return (
    <div className="main-group">
      <div className="title-section">
      <h1>Bienvenido a Autogestion Expensas!</h1>
      <p>
        Una nueva experiencia en gestión de consorcios Sistema integral para la
        administración de edificios privados.
      </p>
      </div>
      <div className="form-login">
        <Form />
      </div>
{/*       <SignInForm /> */}
    </div>
  );
};

export default main;
