/*
  Masyvų iteraciniai metodai
*/

//        Kitos sąlygos
// switch
/*
  switch(duomuo){
    case duomensSąlyga:
      ... veiksmai ...
      break;
    case duomensSąlyga2:
      ... veiksmai2 ...
      break;
    case duomensSąlyga3:
      ... veiksmai3 ...
      break;
    default: // panašiai kaip else
      ... default veiksmai ...
  }
*/
//   4) Parašyti switch'ą, kuris tikrintų koks dabar mėnuo ir grąžintų koks yra metų laikas
let menuo = 'Kovas';
switch(menuo){
  case 'Gruodis':
  case 'Sausis':
  case 'Vasaris':
    console.log('Žiema');
    break;
  case 'Kovas':
  case 'Balandis':
  case 'Gegužė':
    console.log('Pavasaris');
    break;
  case 'Birželis':
    console.log('Vasara');
    break;
  // default:
  //   console.log('Tokio mėnesio nėra');
}

// Ternary
/*
  salyga ? {... veiksmai tiesos atveju ...} : {... veiksmai false atveju ...}
*/
let amzius = 35;
amzius >= 18 ? console.log('pilnametis') : console.log('nepilnametis');

amzius < 18                                 // if
  ? console.log('nepilnametis (x < 18)')    // if veiksmai
  : amzius >= 65                            // else if
  ? console.log('pensininkas (x >= 65)')    // else if veiksmai
  : amzius >= 18 && amzius < 65             // else if su AND
  ? console.log('darbingo amžiaus (18 <= x < 65)') // else if su AND veiksmai
  : console.log('neteisinga įvestis');      // else atvejis

// Loginis AND
/*
  salyga && veiksmai tiesos atveju
*/
let arAdmin = false;
arAdmin && console.log('Yra admin, atvaizduojam dalykus');


//        Destruktūrizavimas
/*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  
  Destruktūrizavimas - kažko (parametrai, objektai, masyvai, ..?) išskaidymas į atskiras dalis.

  Video:
    https://youtu.be/NIq3qLaHCIs - web dev simplified
    https://youtu.be/UgEaJBz3bjY - fireship
    https://youtu.be/-vR3a11Wzt0 - freeCodeCamp
*/
//  masyvai
console.groupCollapsed('masyvų des')
  let masyvasDes = ['labas', undefined, true, 1, 654, false, NaN, 'string', 21];
  console.log(masyvasDes);
  // be destr
  let el0 = masyvasDes[0];
  let el1 = masyvasDes[1] !== undefined ? masyvasDes[1] : 'default reiksme';
  let el2 = masyvasDes[2];
  let elLike = masyvasDes.slice(3);
  console.log(el0, el1, el2, elLike);
  // su destr
  let [em0, em1 = 'default reiksme', em2,,, ...emLike] = masyvasDes;
  console.log(em0, em1, em2, emLike);
  /*
    destruktūrizuojant masyvą vardijama eilės tvarka
    galima prilyginti default reikšmes jeigu originali reikšmė yra undefined
    galima praleisti reikšmes dedant kablelius
    galima atlikti spread'inimą su ...
  */
  function pvzDesMas(pilnasVardas){
    return pilnasVardas.split(' ');
  }
  // let atsPvzDesMas = pvzDesMas('Vardenis Pavardenis');
  // let vardasF = atsPvzDesMas[0];
  // let pavardeF = atsPvzDesMas[1];
  let [vardasF, pavardeF] = pvzDesMas('Vardenis Pavardenis');
  console.log(vardasF, pavardeF);
console.groupEnd();
console.groupCollapsed('objektų des');
  let objektasDes = {
    vardas: "Petras",
    amzius: 55,
    pavarges: true,
    batuDydis: 45,
    vairuotojoTeises: undefined,
    gyvenamojiVieta: {
      miestas: 'Vilnius',
      salis: 'Lietuva'
    },
    pomegiai: ['kartingai', 'baidarės', 'žygiavimas']
  };
  // be destr
  let objVardas = objektasDes.vardas;
  let objSalis = objektasDes.gyvenamojiVieta.salis;
  let objPomegis = objektasDes.pomegiai[2];
  let objVair = objektasDes.vairuotojoTeises !== undefined ? objektasDes.vairuotojoTeises : false;
  console.log(objVardas, objSalis, objPomegis, objVair);
  // let objLike = {
  //   amzius: objektasDes.amzius,
  //
  // }
  // su destr
  let { vardas, amzius:metai, gyvenamojiVieta:{salis}, vairuotojoTeises=false, pomegiai:{2:pomegis}, ...restObj } = objektasDes;
  console.log(vardas, metai, salis, vairuotojoTeises, pomegis, restObj);
  /*
    destruktūrizuojant objekta kreipiesi į raktinius žodžius
    raktinius žodžius gali pervadinti - raktZod:kitasPav
    gali kreiptis į raktą esanti objekte - objViduje:{raktas}
    gali nurodyti default reikšmę jei originalioji yra undefined naudojant lygybę
    galima kreiptis į elementą masyve per indeksą, bet privalu nurodyti naują pavadinimą - masViduje:{index:sugalvotasPav}
    galima susirinkti likusias NEPALIESTAS objekto reikšmes naudojant spread operatorių ...
  */
console.groupEnd();
console.groupCollapsed('parametrų destr'); // nieko naujo, tas pats kas ir objektų ar masyvų destr tik, kad parametrų aprašymo vietoje
  function spreadPvz(tekstas, ...skaiciai){
    console.log(tekstas);
    console.log(skaiciai);
  }
  spreadPvz('labas rytas', 4,6,5,7,8,9,45,54,564,6,516,1,81,65,16,16,1);
  // function objKaipParDes(kazka){
  //   console.log(kazka);
  //   console.log(`${kazka.vardas} yra ${kazka.amzius} metų amžiaus.`);
  // }
  // function objKaipParDes(kazka){
  //   console.log(kazka);
  //   let vardas = kazka.vardas;
  //   let amzius = kazka.amzius;
  //   console.log(`${vardas} yra ${amzius} metų amžiaus.`);
  // }
  function objKaipParDes({ vardas, amzius, ...rest }){
    console.log(vardas, amzius, rest);
    console.log(`${vardas} yra ${amzius} metų amžiaus.`);
  }
  objKaipParDes(objektasDes);
console.groupEnd();

//      Masyvų iteraciniai metodai
/*
  Iteraciniai masyvų metodai yra tokie metodai, kur sukant ciklą per masyvą atliekami kažkokie masyvo metodui reikalingi veiksmai
*/
let masyvasString = ['Suka', 'ciklą', 'per', 'visą', 'masyvą', 'ir', 'kiekvienos', 'iteracijos', 'metu', 'atlieka', 'kažkokius', 'nurodytus', 'veiksmus', 'su', 'tos', 'iteracijos', 'elementu.'];
console.log(masyvasString);
let masyvasNumber = [1,2,3,84,51,26,-451,-1,-46,654,151,3,-4,0];
console.log(masyvasNumber);
/*      forEach
  Syntax:
    masyvas.forEach((el) => { ... veiksmai ... })
    masyvas.forEach((el, i) => { ... veiksmai ... })
    masyvas.forEach((el, i, arr) => { ... veiksmai ... })

  ForEach metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu atlieka kažkokius nurodytus veiksmus su tos iteracijos elementu.
  ForEach negali grąžinti reikšmės, neturi return.
  ForEach negali būti sustabdytas, neveikia break.
*/
console.groupCollapsed('for each')
  masyvasString.forEach( (element, index)=>{ console.log(index, element) } );
console.groupEnd();

/*      filter
  Syntax:
    masyvas.filter((el) => { ... veiksmai ... sąlyga return })
    masyvas.filter((el, i) => { ... veiksmai ... sąlyga return })
    masyvas.filter((el, i, arr) => { ... veiksmai ... sąlyga return })

  Filter metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu tikrinama ar elementas atitinka kažkokią sąlygą. Jeigu atitinka ir grąžinama true, tas elementas yra tampa grąžinamo masyvo dalimi; jeigu neatitinka sąlygos ir grąžinama false - netampa grąžinamo masyvo dalimi.
*/
console.group('filter');
  // let filterAts = masyvasString.filter( (el) => { return el.length > 8 } );
  let filterAts = masyvasString.filter( el => el.charAt(0) === 'i' );
  console.log(filterAts);
console.groupEnd();

/*      map
  Syntax:
    masyvas.map((el) => { ... veiksmai ... return })
    masyvas.map((el, i) => { ... veiksmai ... return })
    masyvas.map((el, i, arr) => { ... veiksmai ... return })

  Map metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu grąžina kažkaip mutuotą/pakeistą/redaguotą elementą, galų gale grąžinamas masyvas su mutuotais elementais.
*/
console.group('map');
  let mapAts = masyvasNumber.map((el, i) => {
    return {
      skaicius: el,
      indeksas: i,
      arLyginis: el % 2 === 0
    }
    // return `Indekse ${i} esantis skaičius ${el} yra ${el % 2 === 0 ? 'lyginis' : 'nelyginis'}.`;
    // return el / i;
  });
  console.log(mapAts);
console.groupEnd();

/*    reduce
  Syntax:
    masyvas.reduce((accumulator, currentElement) => { ... veiksmai ... return })
    masyvas.reduce((accumulator, currentElement, i) => { ... veiksmai ... return })
    masyvas.reduce((accumulator, currentElement, i, arr) => { ... veiksmai ... return })
    masyvas.reduce((accumulator, currentElement) => { ... veiksmai ... return }, intitialValue)
    masyvas.reduce((accumulator, currentElement, i) => { ... veiksmai ... return }, intitialValue)
    masyvas.reduce((accumulator, currentElement, i, arr) => { ... veiksmai ... return }, intitialValue)

  Reduce metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu keičia accumulator'ių naudodamas currentElement'o reikšmę ir grąžina pakeistą accumulator'ių kitai iteracijai. Viso metodo gale grąžinama viena reikšmė - accumulator.
  Pirmosios iteracijos metu, accumulator yra 0'tasis elementas, o currentElement yra 1'asis elementas.
  JEIGU yra nurodytas initialValue - pirmosios iteracijos metu, accumulator yra initialValue, o currentElement yra 0'tasis elementas.
*/
console.group('reduce');
  let reduceAts = mapAts.reduce((acc, curr, i) => {
    // console.log('iteracija: ', i);
    // console.log('acc: ', acc);
    // console.log('curr: ', curr);
    // console.log('-----');
    return acc + curr.skaicius;
  }, 0);
  console.log(reduceAts);
console.groupEnd();

/*  reduceRight
  Lygiai tas pats kas ir reduce, tik iš kito galo. (rtl - right to left)
*/

/*  flatMap
  Junginys flat(1) ir map metodų. Neturi galimybės keisti flat lygmens.
*/

/*  Some
  Syntax:
    masyvas.some((el) => { ... veiksmai ... sąlyga return})
    masyvas.some((el, i) => { ... veiksmai ... sąlyga return})
    masyvas.some((el, i, arr) => { ... veiksmai ... sąlyga return})

  Some metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu tikrina ar elementas atitinka nurodytą sąlygą; iteracijų metų grąžina true arba false.
  Jeigu bent vienoje iteracijoje sąlyga grąžina true - visas metodas grąžina true ir tolimesnės iteracijos nebevyksta.
  Jeigu visose iteracijose sąlygos grąžina false - visas metodas grąžina false.
*/
/*  Every
  Syntax:
    masyvas.every((el) => { ... veiksmai ... sąlyga return})
    masyvas.every((el, i) => { ... veiksmai ... sąlyga return})
    masyvas.every((el, i, arr) => { ... veiksmai ... sąlyga return})

  Every metodas - suka ciklą per visą masyvą ir kiekvienos iteracijos metu tikrina ar elementas atitinka nurodytą sąlygą; iteracijų metų grąžina true arba false.
  Jeigu bent vienoje iteracijoje sąlyga grąžina false - visas metodas grąžina false ir tolimesnės iteracijos nebevyksta.
  Jeigu visose iteracijose sąlygos grąžina true - visas metodas grąžina true.
*/
console.group('some / every')
  let someEveryAts = masyvasNumber.some( (el,i) => {
    console.log(i, el);
    return el > 10;
  });
  console.log(someEveryAts);
console.groupEnd();

/*  Find
  Syntax:
    masyvas.find((el) => { ... veiksmai ... sąlyga return})
    masyvas.find((el, i) => { ... veiksmai ... sąlyga return})
    masyvas.find((el, i, arr) => { ... veiksmai ... sąlyga return})

  Find metodas - suka ciklą per visą masyvą ir tikrina ar elementas atitinka nurodytą sąlygą.
  Jeigu randamas elementas, kuris atitinka nurodytą sąlygą - jis yra grąžinamas (elementas) ir nebėra tikrinami tolimesni elementai.
  Jeigu nerandamas nei vienas elementas, kuris atitinka nurodytą sąlyga - yra grąžinama undefined.
*/
console.group('find');
  let findAts = mapAts.find(el => el.arLyginis); // el.arLyginis === true
  console.log(findAts);
console.groupEnd();

/*  FindIndex
  Syntax:
    masyvas.findIndex((el) => { ... veiksmai ... sąlyga return})
    masyvas.findIndex((el, i) => { ... veiksmai ... sąlyga return})
    masyvas.findIndex((el, i, arr) => { ... veiksmai ... sąlyga return})

  FindIndex metodas - suka ciklą per visą masyvą ir tikrina ar elementas atitinka nurodytą sąlygą.
  Jeigu randamas elementas, kuris atitinka nurodytą sąlygą - yra grąžinamas jo indeksas ir nebėra tikrinami tolimesni elementai.
  Jeigu nerandamas nei vienas elementas, kuris atitinka nurodytą sąlyga - yra grąžinama -1.
*/

/*  FindLast / FindLastIndex
  FindLast ir FindLastIndex daro tą patį ką Find ir FindLastIndex, tik nuo kito galo (rtl - right to left).
*/