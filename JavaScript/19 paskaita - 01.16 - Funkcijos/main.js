//          Funkcijos
/*
  Funkcija yra užvadinti kodas, kuris nevyksta tol kol į jį nėra kreipiamasi.
  Funkcijos gali priimti duomenis ( kreipiantis į funkciją perduodi - argumentus ir funkcijos viduje priimi ir naudoji parametrus ).
  Funkcijos gali grąžinti kažkokią informaciją (duomenis).

  Syntax:
    function susigalvotasPavadinimas(){ ... veiksmai ... }
    function susigalvotasPavadinimas(parametrai, kitasPar, ...){ ... veiksmai ... }

  Call:
    susigalvotasPavadinimas();
    susigalvotasPavadinimas(argumentai, kitasArg, ...);

  Parametras - funkcijos viduje naudojamas kintamasis, kurio reikšmė priklauso nuo jai paduodamas informacijos kreipimosi metu.
  Argumentas - reikšmė, kurią paduodame funkcijai į ją kreipdamiesi.
*/

console.groupCollapsed('Funkcijų įvadas');
  function pasisveikinimas(vardas, nuotaika){
    console.log("Labas rytas, " + vardas + ".");
    console.log(vardas + " yra " + nuotaika + ".");
  }
  pasisveikinimas('Rokas', 'apsimiegojęs');
  pasisveikinimas('Petras', 'suirzęs');
  pasisveikinimas('Jonas', 'laimingas');
  pasisveikinimas('Aluyzas', 'pailsėjęs');
  pasisveikinimas('Antanas', 'dead inside');
  console.log('------------------');

  function sudetis(sk1, sk2){
    let suma = sk1 + sk2;
    return suma;
  }
  let suma0 = sudetis(5, 4);
  console.log(suma0);
  let suma1 = sudetis(100, 321);
  console.log(suma1);
  console.log(sudetis(50,-20));
console.groupEnd();

//        Kreipimasis į DOM | Event
/*
  DOM - Document Object Model

  Kreipimasis į dokumente esančius elementus (tag'us) - document.querySelector('selektorius');
  Įvykio klausymasis dokumente esančio elemento - element.addEventListener('įvykis', funkcija);
*/
console.groupCollapsed('Eventai');
  let mygtukas = document.querySelector('#pirmas > button');
  // console.dir(mygtukas);
  mygtukas.textContent += ' If You Dare';
  mygtukas.addEventListener('click', mygtukoNuspaudimas);
  function mygtukoNuspaudimas(){
    console.log('Paspaudei mygtuką');
    let sekcija = document.querySelector('#pirmas');
    // console.dir(sekcija);
    // console.dir(sekcija.children[0]);
    let antraste = sekcija.children[0];
    antraste.textContent = 'Keičiame HTML per JS';
    antraste.style.textAlign = 'center';
    antraste.style.fontSize = '50px';
    antraste.style.color = 'red';

    // sudetinga
    let imageElement = document.createElement('img');
    imageElement.style.height = '300px';
    imageElement.style.width = 'auto';
    imageElement.setAttribute('src', 'https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg');
    sekcija.appendChild(imageElement);

    // labai paprasta ir blogai dėl code injection
    // sekcija.innerHTML += "<img src='https://www.greenmangaming.com/blog/wp-content/uploads/2022/06/teenage-mutant-ninja-turtles-characters-ranked.jpg' height='300px' width='auto'>";
  }
console.groupEnd();

//          Metodai (string, math, array)
/*
  Metodas yra funkcija, kuri priklauso kažkokiam elementui/kintamajam/objektui.

  Vieni metodai modifikuoja pradinius duomenis, kiti - ne.
*/

//  String metodai
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
/*
  concat - sujungia du arba daugiau string'ų į vieną.
    'as'.concat('labai', 'alkanas', ...); - 'aslabaialkanas'
    NEmodifikuoja nei vieno string'o. Grąžina jų apjungimą.
  endsWith - tikrina ar string'as baigiasi su nurodyta galūne.
    'katinas'.endsWith('as') - true
    NEmodifikuoja pradingio string'o. Grąžina true arba false.
  slice - iškerpa simbolius iš string'o nuo nurodytos pozicijos (imtinai) iki nurodytos pozicijos (neimtinai), o jei iki pozicija nenurodyta - iki galo.
    'katinas'.slice(3,5) - 'in'
    NEmodifikuoja pradinio string'o. Grąžina iškirptą string'o gabaliuką.
  toLowerCase - paverčia string'ą į mažąsias raides
    'KaTinAS'.toLowerCase() - 'katinas'
    NEmodifikuoja pradinio string'o. Grąžina naują kur visos raidės mažosios.
  toUpperCase - paverčia string'ą į didžiąsias raides
    'katINas'.toUpperCase() - 'KATINAS'
    NEmodifikuoja pradinio string'o. Grąžina naują kur visos raidės didžiosios.
  trim - panaikina tarpus string'o pradžioje ir gale
    '   katinas   '.trim() - 'katinas'
    NEmodifikuoja pradinio string'o. Grąžina naują string'ą be tarpų pradžioje ir gale.
*/

//  Math metodai
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
/*
  floor - suapvalina skaičių iki mažiausio sveikojo skaičiaus
    Math.floor(5.9) - 5
  ceil - suapvalina skaičių iki didžiausio sveikojo skaičiaus
    Math.ceil(5.1) - 6
  round - suapvalina skaičių pagal apvalinimo taisykles
    Math.round(5.5) - 6
    Math.round(5.49) - 5
  random - grąžina random skaičių nuo 0 (neimtinai) iki 1 (neimtinai)
    Math.random() - (0; 1)
*/

//  Array metodai
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
/*
  pop - išima iš galo
  push - prideda į galą
  shift - išima iš pradžios
  unshift - prideda į pradžią
  concat - sujungia keletą masyvų į vieną
    [1,2].concat(['a','b'], [5,6], ...) - [1,2,'a','b',5,6]
    NEmodifikuoja nei vieno iš masyvų, o grąžina naują jų junginį.
  slice - iš pateikto masyvo iškerpa elementus nuo nurodyto indekso (imtinai) iki nurodyto indekso (neimtinai), jeigu nėra iki, tuomet iki galo.
    [1,2,3,4,5,6].slice(3,5) - [4,5]
    NEmodifikuoja pradinio masyvo, o grąžina iškirptą gabaliuką kaip naują masyvą
  splice - iš pradinio masyvo iškerpa nuo nurodytos pozicijos, nurodytą kiekį elementų ir jų vietoje įterpia likusius nurodytus elementus. Grąžina iškirptus elementus.
    [1,2,3,4,5,6].splice(3,2,'naujas1','naujas2',654, ...) - [4,5]
    MODIFIKUOJA pradinį masyvą - [1,2,3,'naujas1','naujas2',654,6]
  reverse - apverčia masyvą
    [1,2,3,4,5].reverse() - [5,4,3,2,1]
    MODIFIKUOJA pradinį masyvą - [5,4,3,2,1]
  sort - rikiuoja abėcėlės tvarka arba didėjimo tvarka
    Skaičiams: sort((a,b)=>a-b)
    Žodžiams: sort((a,b)=>a.localeCompare(b))
    MODIFIKUOJA pradinį masyvą, grąžina modifikuotą masyvą
*/

function randomSkaiciusIki(iki){
  return Math.floor(Math.random()*(iki+1));
}
console.log(randomSkaiciusIki(5));

// 2) Sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.
function nuo_1_iki_5(){
  let randomSk = Math.ceil(Math.random()*5);
  return randomSk;
}
console.log(nuo_1_iki_5());

// 3) Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Petraitis" => 15).
function pav(zodis1, zodis2){
  // console.log(zodis1, zodis1.length);
  // console.log(zodis2, zodis2.length);
  // console.log(zodis1.length + zodis2.length)
  return zodis1.length + zodis2.length;
}
let ats1 = pav('ha labas rytas', 'hihi');
console.log(ats1);
let ats2 = pav('asd', 'dddd');
let ats3 = pav('aaaaaaaaaaaaa', 'bbbbbbbbbbbbbbb');
console.log(ats1+ats2+ats3);

// 5) Sukurti funkciją, kuri į konsolę išvestų visus jai duotojo masyvo elementus nuo pirmo iki paskutinio.
function uzd5(masyvas){
  console.log(masyvas);
  for(let i = 0; i < masyvas.length; i++){
    console.log(masyvas[i]);
  }
}
uzd5([5,6,4,8,6,1]);
uzd5([5,6,4,8,6,2]);