import Dog from './modules/Dog.js';
import { randomColor, throwError, sum, division } from './modules/helperFunctions.js';

let doggo = new Dog('Senbernaras', 'Bethovenas', 'balta', 10, 60, 'vyras', false, 'https://a-z-animals.com/media/2023/05/shutterstock-131725145-huge-licensed-scaled.jpg');
console.log(doggo);

console.log(sum(5,6));
console.log(division(5,6));
console.log(randomColor('hex'));