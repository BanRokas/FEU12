console.log('Kodas iš atskiro failo');

// komentaras single line
/*
  komentaras
  multi
  line
  Klaviatūros trumpinys: CTRL / | COMMAND /
*/
//        Pavadinimų kūrimas
/*
  Iš kelių žodžių susidarantys pavadinimai kuriami 2 būdais:
    1) camelCase - kiekvienas naujas žodis prasideda iš didžiosios raidės
    2) snake_case - kiekvienas naujas žodis prasideda už _ simbolio
      (snake_case atvejis: HTML_kazkas; kazkas_HTML; ep7_HTMLl; ...)

  Nenaudoti lietuviškų simbolių PAVADINIMUOSE
  Nepradėti pavadinimų skaičiais
  Nepradėti pavadinimų (beveik niekada) iš didžiosios raidės
*/

//          Kintamieji / Variables (3/5)
/*
  1) var / let / const - kintamojo startas (rašyti vieną iš jų (kolkas siūlau naudoti let)) (rašyti reikia TIK kuriant naują kintamąjį, NEREIKIA rašyti kai kreipiesi į jau egzistuojantį)
    var   - senasis rašymo būdas (hoiste'ina vienu scope'u aukštyn)
    let   - naujas rašymo būdas (naudoti vietoj var)
    const - naujas rašymo būdas skirtas konstantoms
          - nieko nerašant !!!NENAUDOTI!!!, sukuriamas globalus kintamasis

  2) kintamojoVardas - susigalvoji unikalų ir logišką kintamojo vardą

  3) = - lygybės ženklas, nurodoma kintamąjam priskirta reiškmė

  4) reikšmė - nurodai kokią nori reikšmę
    number  - skaičius - užrašomas kaip skaičius arba matematinė išraiška
    string  - žodžiai  - užrašomas kaip simbolių rinkinys kabutėse ('' arba "" arba ``)
    boolean - loginis  - true arba false

  5) ; - loginės eilutės užbaigimas
*/
console.groupCollapsed('Kintamieji');
let skaicius = 5;
let kitasSkaicius = 10;
let sk1 = 654-87*1+3/5;
let sk2 = skaicius*kitasSkaicius;
let randomSkaicius = Math.random(); // grąžina skaičių nuo 0 iki 1
console.log(randomSkaicius);
console.log(skaicius);
let zodis = 'viengubose kabutėse';
let kitasZodis = "dvigubose kabutėse";
let backTick = `back tick kabutėse`;
let neSkaicius = '5';
// console.log(kitasZodis);
// console.log(neSkaicius);
console.log(kitasZodis,';', neSkaicius);
let tiesa = true;
let melas = false;
console.log(tiesa);
let kazkas = skaicius+neSkaicius; // '55'
console.log(kazkas);
let kazkas0 = skaicius*neSkaicius; // 25
console.log(kazkas0);
console.groupEnd();

/*        Informacijos atvaizdavimas naršyklėje
  console.log(); - išvedimas į konsolę (browser -> dev tools -> console)
  console.dir(); - išvedimas į konsolę (išsamios info)
    console.group(); | console.groupCollapsed(); - sukuria konsolę grupę
    console.groupEnd(); - pabaigia konsolės grupę
  window.alert(); - išmeta alert lentelę
  window.prompt(); - išmeta alert tipo lentelę su klausimu ir vieta atsakymui
  Mokinsimės ateityje: innerHTML/innerText/append...
*/
