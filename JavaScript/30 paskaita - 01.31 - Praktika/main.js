import { data2, data4 } from "./dataPvz.js";

import Image from "./components/Image.js";
import List from "./components/List.js";
import Table from "./components/Table.js";


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


// 4) Sukurti Klasę, kurios pagalba galima būtų kurti TABLE elementą, kurio viduje būtų THEAD ir TBODY (gal ir TFOOT jei nori). THEAD viduje būtų TR, kurio viduje TH. TBODY viduje būtų TR, kurių viduje būtų TD. (jeigu darot su TFOOT, tai ten irgi bus TR su TD kaip buvo TBODY).  (kas be ko, galimybė suteikti tekstus ir atributus).

console.log(data4);
const table0 = new Table(data4);
// console.log(table0);
document
  .querySelector('#task_4 > div')
  .appendChild(table0);