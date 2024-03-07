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
  const setFormInputsToCardInfo = cardInfo => {
    // console.log(cardInfo);
    setFormInputs({
      id: cardInfo.id,
      pavadinimas: cardInfo.pavadinimas,
      nuotrauka: cardInfo.nuotrauka,
      kiekisNuo: cardInfo.zaidejai.kiekisNuo,
      kiekisIki: cardInfo.zaidejai.kiekisIki,
      amziusNuo: cardInfo.zaidejai.amziusNuo,
      aprasymas: cardInfo.aprasymas
    });
  }

  return (
    <FormInputsContext.Provider
      value={{
        formInputs,
        onChangeF,
        resetFormInputs,
        setFormInputsToCardInfo
      }}
    >
      { children }
    </FormInputsContext.Provider>
  )
}

export { FormInputsProvider };
export default FormInputsContext;