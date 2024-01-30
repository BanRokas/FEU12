import Suniukas, { graziausiVardai as names } from './modules/Dog.js';
import dogsData from './modules/dogsData.js';
// import { graziausiVardai as names } from './modules/Dog.js';

// console.log(sudetis(5,6));
// console.log(dalyba(5,6));
// console.log(randomColor('hex'));
// console.log(names);

console.log(dogsData);
// let doggo0 = new Suniukas('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
// let doggo1 = new Suniukas('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
// let doggo2 = new Suniukas('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
// let doggo3 = new Suniukas('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
// let doggo0 = new Suniukas(dogsData[0]);
// let doggo1 = new Suniukas(dogsData[1]);
// let doggo2 = new Suniukas(dogsData[2]);
// let doggo3 = new Suniukas(dogsData[3]);
// let doggos = [
//   new Suniukas(dogsData[0]),
//   new Suniukas(dogsData[1]),
//   new Suniukas(dogsData[2]),
//   new Suniukas(dogsData[3])
// ];
const doggos = dogsData.map(dog => new Suniukas(dog));
console.log(doggos);

const sunuKorteliuSekcija = document.createElement('section');
sunuKorteliuSekcija.classList.add('dogsCards');

doggos.forEach(dog => sunuKorteliuSekcija.appendChild(dog));
document
  .querySelector('main')
  .appendChild(sunuKorteliuSekcija);