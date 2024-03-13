import { createContext, useState } from "react";

const MerchandiseFormInputsContext = createContext();

const MerchandiseFormInputsProvider = ({ children }) => {

  const [formInputs, setFormInputs] = useState({
    id: "",
    name: "",
    price: ""
  });

  const resetForm = () => {
    setFormInputs({
      id: "",
      name: "",
      price: ""
    });
  };

  const onChangeF = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.type === 'number' ? e.target.valueAsNumber : e.target.value
    });
  }

  return (
    <MerchandiseFormInputsContext.Provider
      value={{
        formInputs,
        onChangeF,
        resetForm,
        setFormInputs
      }}
    >
      { children }
    </MerchandiseFormInputsContext.Provider>
  )
}

export { MerchandiseFormInputsProvider };
export default MerchandiseFormInputsContext;