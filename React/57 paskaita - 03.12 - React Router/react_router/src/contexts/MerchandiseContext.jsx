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
  const editMerch = editedMerch => {
    // console.log(editedMerch);
    fetch(`http://localhost:8080/merchandise/${editedMerch.id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(editedMerch)
    });
    setMerch(merch.map(el => {
      if(el.id === editedMerch.id){
        return editedMerch;
      } else {
        return el;
      }
    }));
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
        addNewMerch,
        editMerch
      }}
    >
      { children }
    </MerchandiseContext.Provider>
  );
}

export { MerchandiseProvider };
export default MerchandiseContext;