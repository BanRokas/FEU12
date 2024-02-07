//    setTimeout
// console.log('labas');
// setTimeout(() => {
//   console.log(Math.floor(Math.random()*5));
//   setTimeout(() => {
//     console.log(Math.floor(Math.random()*5));
//   }, 5000);
// }, 2000);
// console.log('ate');


//      Promise(resolve)
// function grazink(){ // užtruks 1 sekundes
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Grąžinau');
//     }, 1000);
//   })
// };
// console.log(grazink());


//    Promise(full) + then catch finally
function delay(time, data){
  return new Promise((resolve, reject) => {
    if(typeof(time) !== 'number'){
      reject(new Error(`${time} must be a number`));
    } else if(time > 10000 || time < 0){
      reject(new Error(`${time} must be less than 10000 and more than 0`));
    } else {
      setTimeout(() => resolve(data+' something changed'), time);
    }
  })
}
// delay(1000, 'hihi haha')
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('baigėsi'))

//    async await
async function randomName(){
  const delayAts = await delay(1500, 'haha hihi');
  console.log(delayAts);
}
randomName();