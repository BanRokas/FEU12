import UserCard from "./components/UserCard.js";

console.log('prieš');

fetch('https://randomuser.me/api')
  //        1
  // .then((response)=>{ 
  //   console.log(response)
  //   const data = response.json();
  //   console.log(data);
  //   return data;
  // })
  //        2
  // .then((response) => {
  //   return response.json();
  // })
  //        3
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    console.log(data.results[0]);

    const card = new UserCard(data.results[0]);
    document.querySelector('#randomUser').appendChild(card);
  })
  .catch((error)=>{ console.log(error) })
  .finally(() => { console.log("Baigėsi fetch'as") });

console.log('po');

const fetchISS = () => {
  fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      document.querySelector('#lat').textContent = data.latitude.toFixed(3);
      document.querySelector('#lon').textContent = data.longitude.toFixed(3);
    });
}

// setInterval(fetchISS, 1000);

// window.addEventListener('load', fetchISS);
// window.onload = () => fetchISS();
fetchISS();

document
  .querySelector('#updateISS')
  .addEventListener('click', fetchISS);