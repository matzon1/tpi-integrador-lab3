import React, { useEffect, useState } from "react";

import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [consult, setConsult] = useState([]);
  const [errors, setErrors] = useState('');
  

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

const changeConsult = (event) =>{
  console.log(event.targer.value);
  setConsult(event.target.value);
}
  
  const generateFormObject = () => {
    const formData = {
      name,
      surname,
      email,
      cellphone
    };
    return formData;
  }

  useEffect(() => {
    if(name || surname || email || cellphone){
       setErrors(validate(generateFormObject()));
     }
   },[name, surname, email, cellphone]);
   
  const validationRequierments = {
    name: {required: true, minLength: 3 },
    surname: {required: true, minLength: 3 },
    email: {required: true, regularExpression: /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g},
    cellphone: {required: true},
  }

  const validate = (formData) =>{
    let errors = {};
    if(formData){
      Object.keys(validationRequierments).forEach((key) => {
        if(validationRequierments[key].required && !formData[key]){
          errors[key] = 'El campo es obligatorio.';
        }else if(validationRequierments[key].minLength > 0 && formData[key].lenght < validationRequierments[key].minLength){
          errors[key] = 'El campo debe tener al menos ' + validationRequierments[key].minleLength + ' caracteres';
        //  }else if(validationRequierments[key].regularExpression.test(formData[key])){
        //     errors[key] = 'El email tiene que ser valido';
         }
      }
      
   )};
    return errors;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = generateFormObject();
    const errors = validate(formData);
    if(Object.keys(errors).length > 0){
      setErrors(errors);
      return;
    }
    //habria que ver de enlazar la data a auth0 y un mail to
    setName("");
    setSurname("");
    setEmail("");
    setCellphone("");
    setConsult("");
  };

  return (
    <div className="login-form">
      <label>Contactese con noosotros</label>
      <form onSubmit={submitHandler}>
        <div className="login-form-items">
          <input value={name} onChange={changeName} type="text" placeholder="Ingrese su Nombre" />
          { errors?.name &&
            <div className="red">{ errors.name }</div>}
        </div>
        <div className="login-form-items">
          <input value={surname} onChange={changeSurname} type="text" placeholder="Ingrese su Apellido"/>
          { errors?.surname &&
            <div className="red">{ errors.surname }</div>}
        </div>
      
        <div className="login-form-items">
          <input value={cellphone} onChange={changeCellphone} type="tel" placeholder="Ingrese su numero de Teléfono" />
          { errors?.cellphone &&
            <div className="red">{ errors.cellphone }</div>}
        </div>
        <div className="login-form-items">
          <input value={email} onChange={changeEmail} type="email" placeholder="Ingrese su numero de Email" />
          { errors?.email &&
            <div className="red">{ errors.email }</div>}
        </div>
        <div className="login-form-items">
          <textarea onChange={changeConsult} placeholder="Ingrese su consulta" />
        </div>
        <div className="login-form-items">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
