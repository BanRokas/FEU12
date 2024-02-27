import './App.css';
import { useState } from 'react';
import Skaiciuoti from './components/Skaiciuoti';

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

  return (
    <>
      <Skaiciuoti
        number={skaicius}
        decrement={mazintiSkaiciu}
        increment={didintiSkaiciu}
      />
    </>
  );
}

export default App;