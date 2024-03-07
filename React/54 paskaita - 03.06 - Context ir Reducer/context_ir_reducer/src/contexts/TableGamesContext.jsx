import { createContext, useState, useEffect } from "react";

const TableGamesContext = createContext();

const TableGamesProvider = ({ children }) => {

  const [tableGames, setTableGames] = useState([]);
  
  const addNewTableGame = newTableGame => {
    setTableGames([...tableGames, newTableGame]);
    fetch(`http://localhost:8080/staloZaidimai`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTableGame)
    });
  };
  const deleteTableGame = id => {
    setTableGames(tableGames.filter(game => id !== game.id));
    fetch(`http://localhost:8080/staloZaidimai/${id}`, { method: "DELETE" });
  }
  const editTableGame = changedTableGame => {
    fetch(`http://localhost:8080/staloZaidimai/${changedTableGame.id}`,{
      method: "PUT",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(changedTableGame)
    });
    setTableGames(tableGames.map(tableGame => {
      if(tableGame.id !== changedTableGame.id){
        return tableGame;
      } else {
        return changedTableGame;
      }
    }));
  }
  const editTableGameStatus = id => {
    setTableGames(tableGames.map(tableGame => {
      if(tableGame.id !== id){
        return tableGame;
      } else {
        fetch(`http://localhost:8080/staloZaidimai/${id}`,{
          method: "PATCH",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({ pazymetas: !tableGame.pazymetas })
        })
        return {
          ...tableGame,
          pazymetas: !tableGame.pazymetas
        }
      }
    }));
  }

  useEffect(() => {
    fetch(`http://localhost:8080/staloZaidimai`)
      .then(res => res.json())
      .then(data => setTableGames(data))
  }, []);

  return (
    <TableGamesContext.Provider
      value={{
        tableGames,
        addNewTableGame,
        deleteTableGame,
        editTableGame,
        editTableGameStatus
      }}
    >
      {children}
    </TableGamesContext.Provider>
  );
};

export { TableGamesProvider };
export default TableGamesContext;