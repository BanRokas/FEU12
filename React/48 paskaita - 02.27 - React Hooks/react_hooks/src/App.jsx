import './App.css';
import { useState } from 'react';
import Skaiciuoti from './components/Skaiciuoti';
import Header from './components/Header';

const App = () => {

  // let skaicius = 0;
  const [skaicius, setSkaicius] = useState(0);
  // console.log(skaicius);
  const mazintiSkaiciu = () => {
    // skaicius--;
    setSkaicius(skaicius-1);
    // console.log(skaicius);
  }
  const didintiSkaiciu = () => {
    // skaicius++;
    setSkaicius(skaicius+1);
    // console.log(skaicius);
  }

  const [arPrisijunges, setArPrisijunges] = useState(false);
  const prisijungti = () => setArPrisijunges(true);
  const atsijungti = () => setArPrisijunges(false);

  return (
    <>
      <Header
        isLoggedIn={arPrisijunges}
        logIn={prisijungti}
        logOut={atsijungti}
      />
      {
        arPrisijunges &&
        <Skaiciuoti
          number={skaicius}
          decrement={mazintiSkaiciu}
          increment={didintiSkaiciu}
        />
      }
    </>
  );
}

export default App;