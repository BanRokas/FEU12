import Suniukas, { graziausiVardai as names } from './modules/Dog.js';
import { randomColor, throwError, sum as sudetis, division as dalyba } from './modules/helperFunctions.js';
// import { graziausiVardai as names } from './modules/Dog.js';

let doggo = new Suniukas('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
console.log(doggo);

console.log(sudetis(5,6));
console.log(dalyba(5,6));
console.log(randomColor('hex'));
console.log(names);