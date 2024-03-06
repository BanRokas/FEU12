import './App.css';
import { useState, useEffect } from 'react';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';

const App = () => {

  const [pageLoader, setPageLoader] = useState("cards");
  const [tableGames, setTableGames] = useState([]);
  
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

        /> : pageLoader === "cards" ? 
        <TableGamesPage
          tableGames={tableGames}
        /> : null
      }
    </>
  );
}

export default App;