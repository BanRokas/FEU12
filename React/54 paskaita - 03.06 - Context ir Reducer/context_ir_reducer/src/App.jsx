import './App.css';
import { useState } from 'react';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';

const App = () => {

  const [pageLoader, setPageLoader] = useState("cards");

  return (
    <>
      <Header 
        setPageLoader={setPageLoader}
      />
      {
        pageLoader === "addForm" ?
        <AddNewTableGamePage
          setPageLoader={setPageLoader}
        /> : pageLoader === "cards" ? 
        <TableGamesPage /> : null
      }
    </>
  );
}

export default App;