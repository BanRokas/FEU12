import './App.css';
import Cards from './components/pages/Cards';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Header from './components/UI/Header';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/cards'
            element={<Cards />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;