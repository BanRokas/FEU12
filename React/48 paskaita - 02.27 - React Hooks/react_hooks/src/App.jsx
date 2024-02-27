import './App.css';
import { useState } from 'react';

const App = () => {

  // let skaicius = 0;
  let [skaicius, setSkaicius] = useState(0);
  console.log(skaicius);
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
      <p>Mūsų skaičius yra: {skaicius}</p>
      <button onClick={mazintiSkaiciu}>Mažinti Skaičių</button>
      <button onClick={() => didintiSkaiciu()}>Didinti Skaičių</button>
    </>
  );
}

export default App;