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
