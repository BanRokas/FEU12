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
console.group('parametrų destr'); // nieko naujo, tas pats kas ir objektų ar masyvų destr tik, kad parametrų aprašymo vietoje
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