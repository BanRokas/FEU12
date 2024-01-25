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