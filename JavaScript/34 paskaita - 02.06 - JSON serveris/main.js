//          gauti visus filmus
// fetch(`http://localhost:3000/filmai`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//   })

//          gauti vieną specifinį filmą
// fetch(`http://localhost:3000/filmai/2`)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })

//            papildyti vienu extra filmu
// const filmas = {
//   id: new Date()*1, // Math.random()
//   pavadinimas: "The Intouchables",
//   leidimoData: 2011,
//   nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
// };
// fetch(`http://localhost:3000/filmai`, {
//   method: "POST",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify(filmas)
// })
// nelabai naudinga \/
  // .then(res => res.json())
  // .then(data => console.log(data))

//          papildyti daugeliu extra filmų
// const filmai = [
//   {
//     id: new Date()*1, // Math.random()
//     pavadinimas: "The Intouchables",
//     leidimoData: 2011,
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
//   },{
//     id: new Date()*1, // Math.random()
//     pavadinimas: "The Intouchables0",
//     leidimoData: 2011,
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
//   },{
//     id: new Date()*1, // Math.random()
//     pavadinimas: "The Intouchables1",
//     leidimoData: 2011,
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
//   },{
//     id: new Date()*1, // Math.random()
//     pavadinimas: "The Intouchables2",
//     leidimoData: 2011,
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
//   },{
//     id: new Date()*1, // Math.random()
//     pavadinimas: "The Intouchables3",
//     leidimoData: 2011,
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_FMjpg_UX1000_.jpg"
//   }
// ];
// filmai.forEach(filmas => {
//   fetch(`http://localhost:3000/filmai`, {
//     method: "POST",
//     headers:{
//       "Content-Type":"application/json"
//     },
//     body: JSON.stringify(filmas)
//   })
// })

//          trinti vieną specifinį filmą
// fetch(`http://localhost:3000/filmai/1707212747422`, {
//   method: "DELETE"
// })
// nelabai naudinga \/
// .then(res => {
//   console.log(res);
//   return res.json();
// }).then(data => {
//   console.log(data);
// })

//        trinti daug filmų
// const trintiMasyvas = ["1707212177779", "1707212213888", "1707212215441", "1707212747422", "1707212747422", "1707212747422"];
// trintiMasyvas.forEach(trinamas => {
//   fetch(`http://localhost:3000/filmai/${trinamas}`, {
//     method: "DELETE"
//   })
// })

//      redaguoti su PUT (perrašyti)
// fetch(`http://localhost:3000/filmai/d719`, {
//   method: "PUT",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//     pavadinimas: "Ice Age",
//     nuotrauka: "https://m.media-amazon.com/images/I/51GerfuvYGL._AC_UF894,1000_QL80_.jpg",
//     kitaInfo: 'hihi haha'
//   })
// })

//      redaguoti su PATCH
// fetch(`http://localhost:3000/filmai/5`, {
//   method: "PATCH",
//   headers:{
//     "Content-Type":"application/json"
//   },
//   body: JSON.stringify({
//     pavadinimas: "In Time",
//     nuotrauka: "https://m.media-amazon.com/images/M/MV5BMjA3NzI1ODc1MV5BMl5BanBnXkFtZTcwMzI5NjQwNg@@._V1_.jpg",
//     kitaInfo: 'haha hihi'
//   })
// })