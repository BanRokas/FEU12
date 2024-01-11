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
let sk01 = 654-87*1+3/5;
let sk02 = skaicius*kitasSkaicius;
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

/*        Aritmetika
  Veiksmai su duomenimis

  x+y       - sudėtis
  x-y       - atimtis
  x*y       - daugyba
  x/y       - dalyba
  x**y      - laipsnio kėlimas
  x**(1/y)  - šaknies traukimas
  x%y       - liekana

  Visi aritmetiniai veiksmai APART sudėties gali būti atliekami TIK su skaičiais

  string + number   = string
  string + boolean  = string
  boolean + number  = number
  boolean + boolean = number
*/

let sk1 = 5;
let sk2 = 23;
let neSk = '654';
let zod = 'doggo';
let neMelas = true;

console.groupCollapsed('Aritmetika');
  console.log('5 + 23 =', sk1+sk2); // 28
  console.log('5 - 23 =', sk1-sk2); // -18
  console.log('5 * 23 =', sk1*sk2); // 115
  console.log('5 / 23 =', sk1/sk2); // 0.217...
  console.log('23 ** 5 =', sk2**sk1); // 6436343
  console.log('23 ** (1/5) =', sk2**(1/sk1)); // 1.87...
  console.log('23 % 5 =', sk2%sk1); // 3
  console.log('', zod+sk1); // 'doggo5'
  console.log('', zod-sk1); // NaN
  console.log('', zod*sk1); // NaN
  console.log('', neSk+sk2); // '65423'
  console.log('', sk2+neSk); // '23654'
  console.log('', neSk-sk2); // 631
  console.log('', neSk*sk2); // 15042
  console.log('', neSk/sk2); // 28.434...
console.groupEnd();

/*        Prilyginimai ir Palyginimai

        Prilyginimai
  Naujos reikšmės priskyrimas
    let kintamasis = 10;
    .........
    kintamasis = 25; arba kintamasis = 'kito tipo reikšmė';

  Trumpiniai:
    kintamasis++              - padidina kintamąjį vienetu
    kintamasis--              - sumažina kintamąjį vienetu
    ++kintamasis              - padidina kintamąjį vienetu
    --kintamasis              - sumažina kintamąjį vienetu
    kintamasis+=skaicius      - padidina kintamąjį nurodytu skaičiumi
    kintamasis-=skaicius      - sumažina kintamąjį nurodytu skaičiumi
    kintamasis*=skaicius      - padaugina kintamąjį iš nurodyto skaičiaus
    kintamasis/=skaicius      - padalina kintamąjį iš nurodyto skaičiaus
    kintamasis**=skaicius     - pakelia kintamąjį nurodytu skaičiaus laipsniu
    kintamasis**=(1/skaicius) - ištraukia nurodyto laipsnio šaknį iš kintamojo ir jį prilygina atsakymui
    kintamasis%=skaicius      - randa liekaną dalinant iš nurodyto skaičiaus ir prilygina tam kintamajam

      Palyginimai
  x > y   - ar x daugiau už y
  x < y   - ar x mažiau už y
  x >= y  - x daugiau ARBA lygus y
  x <= y  - x mažiau ARBA lygus y
  x == y  - ar x reikšmė lygi y reikšmei
  x === y - ar x reikšmė IR tipas lygūs y reikšmei IR tipui
  x != y  - ar x reikšmė nelygi y reikšmei
  x !== y - ar x reikšmė IR tipas nelygūs y reikšmei IR tipui
*/

console.groupCollapsed('Prilyginimai');
  let kintamasis = 'pietų metas';
  console.log(kintamasis); // 'pietų metas'
  kintamasis = 10;
  console.log(kintamasis); // 10
  // kintamasis = kintamasis + 1;
  // kintamasis += 1;
  kintamasis++;
  console.log(kintamasis); // 11
  kintamasis += 5;
  console.log(kintamasis); // 16
  kintamasis -= 20;
  console.log(kintamasis); // -4
console.groupEnd();

console.group('Palyginimai');
  console.log('10 > 10', 10 > 10); // false
  console.log('10 < 10', 10 < 10); // false
  console.log('10 > 3', 10 > 3); // true
  console.log('10 < 3', 10 < 3); // false
  console.log('10 >= 10', 10 >= 10); // true (false ARBA true)
  console.log('10 <= 10', 10 <= 10); // true (false ARBA true)
  console.log('10 >= 3', 10 >= 3); // true (true ARBA false)
  console.log('10 <= 3', 10 <= 3); // false (false ARBA false)
  console.log('10 == 10', 10 == 10); // true
  console.log('10 == "10"', 10 == "10"); // true (reikšmė)
  console.log('10 === "10"', 10 === "10"); // false (reikšmė IR tipas)
  console.log('10 != 10', 10 != 10); // false
  console.log('10 != "10"', 10 != "10"); // false
  console.log('10 !== "10"', 10 !== "10"); // true
  console.log('10 != "3"', 10 != "3"); // true
console.groupEnd();