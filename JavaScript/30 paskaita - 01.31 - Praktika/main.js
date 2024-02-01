import { data2 } from "./dataPvz.js";

import Image from "./components/Image.js";
import List from "./components/List.js";

{
  const paveiksliukuKonteineris = document.querySelector('#task1_1 > div');

  // const perry = new Image('https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png');
  // const jhonny = new Image('https://static.wikia.nocookie.net/vsdebating/images/c/c1/JohnnyBravo.png');

  const perry = new Image({
    attributes: [
      {
        name: 'src',
        value: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Perry_the_Platypus.png'
      }, {
        name: 'alt',
        value: 'Perry the Platypus'
      }, {
        name: 'height',
        value: '200px'
      }
    ]
  });
  const jhonny = new Image({
    attributes: [
      {
        name: 'src',
        value: 'https://static.wikia.nocookie.net/vsdebating/images/c/c1/JohnnyBravo.png'
      }, {
        name: 'class',
        value: 'remeliai dydisL padding_1'
      }
    ]
  });

  paveiksliukuKonteineris.appendChild(perry);
  paveiksliukuKonteineris.appendChild(jhonny);
}


// 2) Sukurti Klasę, kurios pagalba galima būtų kurti OL arba UL elementus su LI jų viduje. (kas be ko, galimybė suteikti tekstus ir atributus)
// console.log(data2);

const sarasas = new List(data2);
// const sarasas2 = new List({
//   listType: 'ol',
//   listItems: ['labas', 'ate', 'pusryčiai', 'dar', 'penktas']
// });

document.querySelector('#task2 > div').appendChild(sarasas);
// document.querySelector('#task2 > div').appendChild(sarasas2);