const DOM_pvz = document.querySelector('#DOM_pvz');
DOM_pvz.classList.add('kortele');

let antraste = document.createElement('h1');
DOM_pvz.appendChild(antraste);
let antrastesPavadinimas = document.createTextNode('Kortelės pavadinimas');
antraste.appendChild(antrastesPavadinimas);
// let antrastesPavadinimasExtra = document.createTextNode('dar teksto ');
// antraste.prepend(antrastesPavadinimasExtra);
// antraste.textContent = 'Kortelės pavadinimas';
// antraste.textContent += ' dar teksto';
// antraste.textContent = `dar teksto ${antraste.textContent}`;

let paragrafas = document.createElement('p');
let paragrafasTekstas = document.createTextNode('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consequatur velit eum vero ipsum magnam repellendus deserunt laudantium voluptatibus suscipit.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat consequatur velit eum vero ipsum magnam repellendus deserunt laudantium voluptatibus suscipit.');
paragrafas.appendChild(paragrafasTekstas);
DOM_pvz.appendChild(paragrafas);

let image = document.createElement('img');
console.dir(image);
// image.src = 'https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png';
// image.alt = 'uncle Stan';
image.setAttribute('src', 'https://static.wikia.nocookie.net/villains/images/f/f8/Stan_Pines.png');
image.setAttribute('alt', 'uncle Stan');
DOM_pvz.appendChild(image);

// DOM_pvz.addEventListener('mouseenter', () => {
//   console.log('hallo');
//   DOM_pvz.classList.add('kortelePortraitChange');
// });
// DOM_pvz.addEventListener('mouseleave', () => {
//   DOM_pvz.classList.remove('kortelePortraitChange');
// });

DOM_pvz.addEventListener('click', () => {
  DOM_pvz.classList.toggle('kortelePortraitChange');
});

//  -------------------------------------------
//                  LIST
const listSec = document.querySelector('#list');
//      innerHTML
// let listItemai = '';
// for(let i = 0; i < 10; i++){
//   listItemai += `<li>tekstas</li>`
// }
// listSec.innerHTML += `
//   <ul>
//     ${listItemai}
//   </ul>
// `;
// let listItem = document.querySelector('#list > ul > li');
// console.log(listItem);

//      createElement
let sarasas = document.createElement('ul');
for(let i = 0; i < 10; i++){
  let listItem = document.createElement('li');
  // listItem.addEventListener('click', (e) => e.target.style.color='red');
  let listItemText = document.createTextNode('tekstas');
  listItem.appendChild(listItemText);
  sarasas.appendChild(listItem);
}
listSec.appendChild(sarasas);


//        DOM pildymas iš duomenų
console.log(duomenysKartu);
/*
          iš duomenų sukurti korteles ir jas atvaiduoti HTML'e

  sukti ciklą per VISUS duomenis
    susikurti html elementus kiekvienos kortelės
    html elementus užpildyti info iš duomenų
    kortelę sukelti į HTML'ą
*/
const moviesDiv = document.querySelector('#moviesContainer');

duomenysKartu.forEach(filmas => {
  // let { pavadinimas, aprasymas, paveiksliukoURL, paveiksliukoALT } = filmas;

  const divas = document.createElement('div');
  divas.classList.add('kortele');

  const heading = document.createElement('h1');
  const headingText = document.createTextNode(filmas.pavadinimas);
  heading.appendChild(headingText);

  const par = document.createElement('p');
  const parText = document.createTextNode(filmas.aprasymas);
  par.appendChild(parText);

  const image = document.createElement('img');
  image.setAttribute('src', filmas.paveiksliukoURL);
  image.setAttribute('alt', filmas.paveiksliukoALT);

  divas.append(heading, par, image);
  moviesDiv.appendChild(divas);

  // moviesDiv.innerHTML += `
  // <div class="kortele">
  //   <h1>${filmas.pavadinimas}</h1>
  //   <p>${filmas.aprasymas}</p>
  //   <img 
  //     src=${filmas.paveiksliukoURL}
  //     alt=${filmas.paveiksliukoALT}
  //   >
  // </div>
  // `;
});