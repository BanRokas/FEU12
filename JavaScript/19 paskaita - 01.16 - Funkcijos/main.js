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
console.group('Eventai');
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
  }
console.groupEnd();
