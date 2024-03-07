import './App.css';
import { useContext } from 'react';
import PageLoaderContext from './contexts/PageLoaderContext';
import TableGamesPage from './components/pages/TableGames/TableGamesPage';
import AddNewTableGamePage from './components/pages/AddNewTableGame/AddNewTableGamePage';
import Header from './components/UI/Header/Header';

const App = () => {

  const { pageLoader } = useContext(PageLoaderContext);

  return (
    <>
      <Header />
      {
        pageLoader === "addForm" ? <AddNewTableGamePage /> 
        : pageLoader === "cards" ? <TableGamesPage />
        : null
      }
    </>
  );
}

export default App;