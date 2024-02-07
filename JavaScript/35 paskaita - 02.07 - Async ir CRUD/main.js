//    setTimeout

console.log('labas');
setTimeout(() => {
  console.log(Math.floor(Math.random()*5));
  setTimeout(() => {
    console.log(Math.floor(Math.random()*5));
  }, 5000);
}, 2000);
console.log('ate');


// function randomSkaicius(){ // užtruks 2 sekundes
//   return new Promise((resolve) => {
    
//   })
// };

// console.log(randomSkaicius());
