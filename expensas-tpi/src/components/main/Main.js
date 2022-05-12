import React from "react";
import { SignInForm } from "../SignInForm";

import Form from "./Form";

const main = () => {
  return (
    <div>
      <h1>Bienvenido a Autogestion Expensas!</h1>
      <p>
        Una nueva experiencia en gestión de consorcios Sistema integral para la
        administración de edificios privados.
      </p>
      <div>
        <Form />
      </div>
      <div>
        <SignInForm />
      </div>
    </div>
  );
};

export default main;
