import './App.css';
import Merchandise from './components/pages/Merchandise';
import Home from './components/pages/Home';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import Header from './components/UI/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddNewMerch from './components/pages/AddNewMerch';
import OneMerchPage from './components/pages/OneMerchPage';
import EditMerch from './components/pages/EditMerch';

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
          <Route path='/merchandise' >
            <Route index element={<Merchandise />} />
            <Route path=':id' element={<OneMerchPage />}/>
            <Route path="addNew" element={<AddNewMerch />}/>
            <Route path=":id/edit" element={<EditMerch />}/>
          </Route>
          {/* <Route path='/merchandise' element={<Merchandise />} />
          <Route path='/merchandise/:id' element={<OneMerchPage />} />
          <Route path='/merchandise/addNew' element={<AddNewMerch />} />
          <Route path='/merchandise/edit/:id' element={<EditMerch />} /> */}
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route path='*' element={<Navigate to="/" />}/>
        </Routes>
      </main>
    </>
  );
}

export default App;