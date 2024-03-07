import { createContext, useEffect, useReducer } from "react";

const TableGamesContext = createContext();

export const actionTypes = {
  addNew: 'prideti nauja stalo žaidimą',
  editFull: 'redaguoti visą stalo žaidimo duomenį',
  editStatus: 'redaguoti stalo žaidimo statusą',
  delete: 'ištrinti vieną stalo žaidimą',
  setData: 'fetch metu užpildo visus duomenis'
}

const reducer = (state, action) => {
  switch(action.type){
    case actionTypes.setData:
      return action.data;
    case actionTypes.addNew:
      fetch(`http://localhost:8080/staloZaidimai`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.data)
      });
      return [...state, action.data];
    case actionTypes.editFull:
      fetch(`http://localhost:8080/staloZaidimai/${action.changedTableGame.id}`,{
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(action.changedTableGame)
      });
      return state.map(tableGame => {
        if(tableGame.id !== action.changedTableGame.id){
          return tableGame;
        } else {
          return action.changedTableGame;
        }
      });
    case actionTypes.editStatus:
      return state.map(tableGame => {
        if(tableGame.id !== action.id){
          return tableGame;
        } else {
          fetch(`http://localhost:8080/staloZaidimai/${action.id}`,{
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
      });
    case actionTypes.delete:
      fetch(`http://localhost:8080/staloZaidimai/${action.id}`, { method: "DELETE" });
      return state.filter(game => action.id !== game.id);
    default:
      console.error('Unknown action type', action.type);
      return state;
  }
}

const TableGamesProvider = ({ children }) => {

  const [tableGames, setTableGames] = useReducer(reducer, []);
  useEffect(() => {
    fetch(`http://localhost:8080/staloZaidimai`)
      .then(res => res.json())
      .then(data => {
        setTableGames({ type: actionTypes.setData, data: data });
      });
  }, []);

  // const [tableGames, setTableGames] = useState([]);
  // const addNewTableGame = newTableGame => {
  //   setTableGames([...tableGames, newTableGame]);
  //   fetch(`http://localhost:8080/staloZaidimai`,{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify(newTableGame)
  //   });
  // };
  // const deleteTableGame = id => {
  //   setTableGames(tableGames.filter(game => id !== game.id));
  //   fetch(`http://localhost:8080/staloZaidimai/${id}`, { method: "DELETE" });
  // }
  // const editTableGame = changedTableGame => {
  //   fetch(`http://localhost:8080/staloZaidimai/${changedTableGame.id}`,{
  //     method: "PUT",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify(changedTableGame)
  //   });
  //   setTableGames(tableGames.map(tableGame => {
  //     if(tableGame.id !== changedTableGame.id){
  //       return tableGame;
  //     } else {
  //       return changedTableGame;
  //     }
  //   }));
  // }
  // const editTableGameStatus = id => {
  //   setTableGames(tableGames.map(tableGame => {
  //     if(tableGame.id !== id){
  //       return tableGame;
  //     } else {
  //       fetch(`http://localhost:8080/staloZaidimai/${id}`,{
  //         method: "PATCH",
  //         headers:{
  //           "Content-Type":"application/json"
  //         },
  //         body: JSON.stringify({ pazymetas: !tableGame.pazymetas })
  //       })
  //       return {
  //         ...tableGame,
  //         pazymetas: !tableGame.pazymetas
  //       }
  //     }
  //   }));
  // }
  // useEffect(() => {
  //   fetch(`http://localhost:8080/staloZaidimai`)
  //     .then(res => res.json())
  //     .then(data => setTableGames(data))
  // }, []);

  return (
    <TableGamesContext.Provider
      value={{
        // tableGames,
        // addNewTableGame,
        // deleteTableGame,
        // editTableGame,
        // editTableGameStatus
        tableGames,
        setTableGames
      }}
    >
      {children}
    </TableGamesContext.Provider>
  );
};

export { TableGamesProvider };
export default TableGamesContext;