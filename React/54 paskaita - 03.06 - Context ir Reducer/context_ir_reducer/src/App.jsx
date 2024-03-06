import './App.css';
import { useState, useEffect } from 'react';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';

const App = () => {

  const [tableGames, setTableGames] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/staloZaidimai`)
      .then(res => res.json())
      .then(data => setTableGames(data))
  }, []);

  return (
    <>
      <TableGamesPage
        tableGames={tableGames}
      />
    </>
  );
}

export default App;