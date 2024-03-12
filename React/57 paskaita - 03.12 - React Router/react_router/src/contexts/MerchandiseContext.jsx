import { createContext, useState, useEffect } from "react";

const MerchandiseContext = createContext();

const MerchandiseProvider = ({ children }) => {

  const [merch, setMerch] = useState([]);

  const addNewMerch = newMerch => {
    setMerch([...merch, newMerch]);
    fetch(`http://localhost:8080/merchandise`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newMerch)
    });
  };
  useEffect(()=>{
    fetch(`http://localhost:8080/merchandise`)
      .then(res => res.json())
      .then(data => setMerch(data));
  },[]);

  return (
    <MerchandiseContext.Provider
      value={{
        merch,
        addNewMerch
      }}
    >
      { children }
    </MerchandiseContext.Provider>
  );
}

export { MerchandiseProvider };
export default MerchandiseContext;