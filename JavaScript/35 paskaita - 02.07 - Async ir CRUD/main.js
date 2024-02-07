import School from "./components/School.js";

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
// function delay(time, data){
//   return new Promise((resolve, reject) => {
//     if(typeof(time) !== 'number'){
//       reject(new Error(`${time} must be a number`));
//     } else if(time > 10000 || time < 0){
//       reject(new Error(`${time} must be less than 10000 and more than 0`));
//     } else {
//       setTimeout(() => resolve(data+' something changed'), time);
//     }
//   })
// }
// delay(1000, 'hihi haha')
//   .then(res => console.log(res))
//   .catch(err => console.error(err))
//   .finally(() => console.log('baigėsi'))

//    async await
// async function randomName(){
//   try{
//     const delayAts = await delay(1500, 'haha hihi');
//     console.log(delayAts);
//   } catch(err){
//     console.error(err);
//   } finally{
//     console.log('baigėsi');
//   }
// }
// randomName();


(async () => {
  // const res = await fetch(`http://localhost:8080/school`);
  // const schools = await res.json();
  const schools = await (await fetch(`http://localhost:8080/school`)).json();
  console.log(schools);

  schools.forEach(school => {
    const schoolDiv = new School(school);

    document.querySelector('#crud > div').appendChild(schoolDiv);
  })
})()

document
  .querySelector('#crud > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    console.dir(e.target);
    // const formData = new FormData(e.target);
    // const school0 = Object.fromEntries(formData);
    // school0.fNr = school0.fNr*1;
    // school0.id = new Date()*1+'';
    // console.log(school0);
    const school = {
      id: new Date()*1+'',
      pavadinimas: e.target.elements.name.value,
      miestas: e.target.elements.city.value,
      fakultetuKiekis: e.target.elements.fNr.valueAsNumber
    };
    const schoolDiv = new School(school);
    document.querySelector('#crud > div').appendChild(schoolDiv);

    fetch(`http://localhost:8080/school`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(school)
    });

    console.log(school);
  });