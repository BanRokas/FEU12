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
  // let vardas = atsPvzDesMas[0];
  // let pavarde = atsPvzDesMas[1];
  let [vardas, pavarde] = pvzDesMas('Vardenis Pavardenis');
  console.log(vardas, pavarde);
console.groupEnd();
console.group('objektų des');
  let objektasDes = {
    vardas: "Petras",
    amzius: 55,
    pavarges: true,
    vairuotojoTeises: undefined,
    gyvenamojiVieta: {
      miestas: 'Vilnius',
      salis: 'Lietuva'
    },
    pomegiai: ['kartingai', 'baidarės', 'žygiavimas']
  };
  
console.groupEnd();