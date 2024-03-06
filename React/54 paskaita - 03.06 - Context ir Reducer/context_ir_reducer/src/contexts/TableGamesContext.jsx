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
        deleteTableGame
      }}
    >
      {children}
    </TableGamesContext.Provider>
  );
};

export { TableGamesProvider };
export default TableGamesContext;