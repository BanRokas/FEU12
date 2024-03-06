import './App.css';
import { useState, useEffect } from 'react';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';

const App = () => {

  const [formInputs, setFormInputs] = useState({
    pavadinimas:"",
    nuotrauka:"",
    kiekisNuo:"",
    kiekisIki:"",
    amziusNuo:"",
    aprasymas:""
  });
  const [pageLoader, setPageLoader] = useState("cards");
  const [tableGames, setTableGames] = useState([]);
  
  const addNewTableGame = newTableGame => {
    // console.log(newTableGame);
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
    <>
      <Header 
        setPageLoader={setPageLoader}
      />
      {
        pageLoader === "addForm" ?
        <AddNewTableGamePage
          addNewTableGame={addNewTableGame}
          setPageLoader={setPageLoader}
          formInputs={formInputs}
          setFormInputs={setFormInputs}
        /> : pageLoader === "cards" ? 
        <TableGamesPage
          tableGames={tableGames}
          deleteTableGame={deleteTableGame}
        /> : null
      }
    </>
  );
}

export default App;