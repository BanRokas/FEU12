import './App.css';
import { useState } from 'react';
import RegisterFormPage from './components/pages/registerFormPage/RegisterFormPage';

const App = () => {

  const [formInputs, setFormInputs] = useState({
    vardas: "var",
    email: "em",
    avatar: "av",
    password: "a",
    passwordRepeat: "aa"
  });

  return (
    <>
      <RegisterFormPage
        value={formInputs}
        onChangeF={setFormInputs}
      />
    </>
  );
}

export default App;