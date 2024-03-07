import { createContext, useState } from "react";

const FormInputsContext = createContext();

const FormInputsProvider = ({ children }) => {

  const [formInputs, setFormInputs] = useState({
    id: "",
    pavadinimas:"",
    nuotrauka:"",
    kiekisNuo:"",
    kiekisIki:"",
    amziusNuo:"",
    aprasymas:""
  });
  const onChangeF = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
  }
  const resetFormInputs = () =>{
    setFormInputs({
      id: "",
      pavadinimas:"",
      nuotrauka:"",
      kiekisNuo:"",
      kiekisIki:"",
      amziusNuo:"",
      aprasymas:""
    });
  }

  return (
    <FormInputsContext.Provider
      value={{
        formInputs,
        onChangeF,
        resetFormInputs
      }}
    >
      { children }
    </FormInputsContext.Provider>
  )
}

export { FormInputsProvider };
export default FormInputsContext;