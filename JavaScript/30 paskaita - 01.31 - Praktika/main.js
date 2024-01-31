import Image from "./components/Image.js";

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