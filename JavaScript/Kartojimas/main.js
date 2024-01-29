//          Kintamieji
console.groupCollapsed('kintamieji');
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

console.group('Ciklai');

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