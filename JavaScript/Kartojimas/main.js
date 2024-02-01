//          Kintamieji
console.groupCollapsed('Kintamieji');
let zodisK0 = 'string';
let zodisK1 = "string";
let zodisK2 = `string`;
let zodisK3 = 'Vienas'+' '+'Kitas';
let zodisK4 = zodisK0 + ' tekstas';
let zodisK5 = `${zodisK2} zodisK3 ${zodisK4}; 4+5 ${4+5}`;

let skaiciusK0 = 4;
let skaiciusK1 = 4+5*6;   // 34
let skaiciusK2 = (4+5)*6; // 54
let skaiciusK3 = skaiciusK0*5;

let booleanK0 = false;
let booleanK1 = true;

let arrayK0 = [4,6,5,'kitos reikšmės', false, 'haha', 321, 54*5, 'string combo'+' su '+'kitas string', booleanK0, skaiciusK2, zodisK3, skaiciusK1+skaiciusK3];
let arrayK1 = [['masyvas masyve', '01', 2], 'ne kitas masyvas', [4+5, 9*9, ['a'+'b']]];
console.log(arrayK0[8], arrayK0[4+3], arrayK0[skaiciusK0], arrayK1[0][1], arrayK1[2][2][0]);

let objectK0 = {
  raktas1: 'reiksme1',
  raktasKitas: 'reiksmeKita',
  raktasSkaiciaus: 654*8,
  raktasMelas: false,
  raktasVeiksmasKintamuju: arrayK0[2]+skaiciusK1
};
let objectK1 = {
  vardas: 'Jonas',
  amzius: 65,
  vedes: true,
  lokacija:{
    miestas: 'Vilnius',
    salis: 'LTU'
  },
  darStuff: objectK0
};
console.log(objectK0, objectK0.raktas1, objectK1.lokacija.salis, objectK1.darStuff.raktasMelas);

let arrInObjK0 = {
  vardas: 'Petras',
  pomegiai: ['bike', 'pc', 'friends', 'something else...']
};
console.log(arrInObjK0.pomegiai[skaiciusK0-2]);

let objInArrK0 = [
  {
    vardas: "Rokas",
    amzius: 27
  },{
    vardas: "Petras",
    amzius: 50
  },{
    vardas: "Jonas",
    amzius: 20
  },{
    vardas: "Antanas",
    amzius: 29
  },{
    vardas: "Aloyzas",
    amzius: 92
  }
];
console.log(objInArrK0[4].vardas);

console.groupEnd();

console.groupCollapsed('Sąlygos');
if(true){
  // veiksmai true atveju
}

if(true){
  // veiksmai true atveju
} else {
  // veiksmai false atveju
}

if(false){
  // veiksmai if tiesos atveju
} else if(false){
  // veiksmai if melo, o else_if tiesos atveju
}

if(true){
  // veiksmai if tiesos atveju
} else if(false){
  // veiksmai if melo, o else_if tiesos atveju
} else if(true){
  // veiksmai if melo, else_if(pirmo) melo, o else_if(antro) tiesos atveju
} else {
  // veiksmai if melo, else_if(pirmo) melo, else_if(antro) melo atveju
  // kitaip pasakius, visų iki jo ėjusių salygų melo atveju
}

switch('something'){
  case 'something':
    // veiksmai jeigu switch viduje yra 'something'
    break;
  case 'somethingElse':
    // veiksmai jeigu switch viduje yra 'somethingElse'
    break;
  case 'somethingNew':
    // veiksmai jeigu switch viduje yra 'somethingNew'
    break;
  case 'somethingSomething':
    // veiksmai jeigu switch viduje yra 'somethingSomething'
    break;
  case 'somethingHey':
    // veiksmai jeigu switch viduje yra 'somethingHey'
    break;
  default:
    // veiksmai jeigu nei vienas case nebuvo teisus
}

true ? console.log('do true stuff') : console.log('do false stuff');

false && console.log('do true stuff');

console.groupEnd();

console.groupCollapsed('Ciklai');

for(let i = 0; i < 50; i+=6){
  console.log(i);
}

for(el of arrayK0){
  console.log(el);
}

for(key in objectK1){
  console.log(key, objectK1[key]);
}

let nr = 0;
while(nr < 10){
  nr = Math.random()*11;
  console.log(nr);
}

do{
  console.log('does at least once');
} while(false);

/* iteraciniai masyvų metodai */

console.groupEnd();

console.groupCollapsed('Funkcijos');

function fVardas(par){
  console.log(par+'hihi haha');
}
fVardas('Tell me ');
fVardas('U ok?');
fVardas(5);
fVardas(false);

//              ________________________
//              |                      |
//              |     ________         |
//              |     |      |         |
function suma(par1, par2){// |         |
  return par1+par2;//        |         |
}//     |                    |         |
//      |                    |         |
//      |                    |         |
//      |       _____________|         |
//      |       |                      |
let a = suma(6, 9);//                  |
//           |                         |
//           |                         |
//           ---------------------------
console.log(a);
console.groupEnd();

console.groupCollapsed('Masyvai ir Objektai');
  const league = {
    pavadinimas: 'League of Legends',
    nuotrauka: 'https://assets.nuuvem.com/image/upload/t_screenshot_full/v1/products/5eb09e2bc883e67fb003013d/screenshots/omthhuq2ntvwzzo0dbss.jpg',
    vertinimai: [
      {
        vertinimas: '3.2/5',
        vertintojai: 'Facebook'
      },{
        vertinimas: '74%',
        vertintojai: 'Google'
      }
    ],
    aprasymas: `League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot Games. Inspired by Defense of the Ancients, a custom map for Warcraft III, Riot's founders sought to develop a stand-alone game in the same genre.`,
    extraInfo: {
      tekstas: 'Wikipedia',
      nuoroda: 'https://en.wikipedia.org/wiki/League_of_Legends'
    },
    isleidimoData: {
      pavadinimas: 'Initial release date',
      data: 'October 27, 2009'
    },
    kurejas:{
      pavadinimas: 'Developer',
      list: [
        {
          tekstas: 'Riot Games',
          nuoroda: 'https://www.google.com/search?q=Riot+Games'
        }
      ]
    },
    zanrai:{
      pavadinimas: 'Genres',
      list : [
        {
          tekstas: 'Multiplayer online battle arena',
          nuoroda: 'https://www.google.com/search?q=Multiplayer+online+battle+arena'
        },{
          tekstas: 'Action role-playing game',
          nuoroda: 'https://www.google.com/search?q=Action+role-playing+game'
        }
      ]
    }
  };
  console.log(league);
console.groupEnd();

console.group('Funkcijos');

  //  Reikia funkcijos, kuri apskaičiuotų apskritimo tūrį. Funkcijai paduodama visa informacija apie apskritimą
  const apskritimas = {
    spindulys: 8.4321,
    spalva: 'juoda',
    linijosStoris: 3
  };
  const apskritimas2 = {
    spindulys: 654
  };
  const apskritimas3 = {
    skersmuo: 20
  };
  // apskritimas3.spindulys = apskritimas3.skersmuo / 2;
  function apskritimoTuris({ spindulys, skersmuo }){
    // console.log(spindulys, skersmuo);
    if(spindulys){
      return turis = Math.PI * Math.pow(spindulys, 2);
    } else if(skersmuo){
      return turis = Math.PI * Math.pow(skersmuo/2, 2);
    } else {
      return 'could not be calculated';
    }
  }
  console.log(apskritimas);
  console.log(apskritimas2);
  console.log(apskritimas3);
  apskritimas.turis = apskritimoTuris(apskritimas);
  apskritimas2.turis = apskritimoTuris(apskritimas2);
  apskritimas3.turis = apskritimoTuris(apskritimas3);
  console.log(apskritimas);
  console.log(apskritimas2);
  console.log(apskritimas3);


  // Reikia funkcijos, kuriai padavus asmens gimimo datą (pilną) - ji grąžintų jo amžių. 
  const asmuo0 = {
    vardas: "Rokas",
    pavardė: "Banaitis",
    dob: '1996 02 01',
    ugis: 186,
    akiuSpalva: 'mėlyna',
    arVedes: false
  };
  const asmuo1 = {
    vardas: "Petras",
    dob: '1960 03 01'
  }

  function amzius(dob){
    const dobDateFormat = new Date(dob);
    const currentDate = new Date();
    const difference = currentDate - dobDateFormat;
    const timeSince1970 = new Date(difference);
    const now = timeSince1970.getFullYear() - 1970;
    // return new Date(new Date() - new Date(dob)).getFullYear() - 1970;
    // console.log(dobDateFormat);
    // console.log(currentDate);
    // console.log(currentDate-dobDateFormat);
    // console.log(now);
    const amzius = now;
    return amzius;
  }

  // console.log(asmuo0);
  asmuo0.amzius = amzius(asmuo0.dob);
  asmuo1.amzius = amzius(asmuo1.dob);
  console.log(asmuo1);
console.groupEnd();