import './App.css';
import { useState } from 'react';

const App = () => {

  const [food, setFood] = useState([
    {
      id: 0,
      pavadinimas: 'Kebabas',
      kilmesSalis: 'Bizantija',
      ragautas: true,
      ingredientai: ['mėsa', 'padažas', 'daržovės', 'lavašas'],
      kaina: {
        nuo: 4.5,
        iki: 8
      }
    },{
      id: 1,
      pavadinimas: 'Pica',
      kilmesSalis: 'Italija',
      ragautas: true,
      ingredientai: ['picos padas', 'padažas', 'sūris', 'mėsa'],
      kaina: {
        nuo: 8,
        iki: 16
      }
    },{
      id: 3,
      pavadinimas: 'Cepelinai',
      kilmesSalis: 'Lietuva',
      ragautas: true,
      ingredientai: ['bulvė', 'mėsa', 'grietinė', 'spirgučiai'],
      kaina: {
        nuo: 1.5,
        iki: 5
      }
    },{
      id: 4,
      pavadinimas: 'Sevičė',
      kilmesSalis: 'Peru',
      ragautas: false,
      ingredientai: ['žalia žuvis', 'daržovės', 'žalia citrina'],
      kaina: {
        nuo: 10,
        iki: 20
      }
    }
  ]);

  return (
    <>

    </>
  );
}

export default App;