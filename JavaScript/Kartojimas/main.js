//          Kintamieji
console.group('kintamieji');
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