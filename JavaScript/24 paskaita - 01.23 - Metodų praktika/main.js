

// destruktūrizavimo tasks:
// 1) Naudodami destructuring priskirkite 2 kintamiesiems 2 masyvo reikšmes, iš kurių 1'oji būtų 3'oji masyvo reikšmė, o 2'oji būtų likusios masyvo reikšmės.
let masyvasDestr = [1,2,3,4,5,6,7,8,9];
let [,,,pirmas, ...antras] = masyvasDestr;
// console.log(pirmas, antras);
// 2) Naudodami destructuring priskirkite 4 kintamiesiems 4 objekto reikšmes, iš kurių 1'oji būtų pakeistu pavadinimu, 2'oji turėtų default reikšmę, 3'oji būtų iš viduje nestinto objekto, 4'oji būtų iš viduje nestinto objekto su pakeistu pavadinimu.
let objektasDestr = {
  pavadinimas: "Mont-Saint-Michel",
  lokacija: {
    salis: 'France',
    zemynas: 'Europa',
    planeta: 'Žemė'
  },
  lankyta: false,
  skaniausiasPatiekalas: undefined
};
let { pavadinimas:vadinamas, skaniausiasPatiekalas='krabo patis', lokacija:{salis}, lokacija:{zemynas:kontinentas} } = objektasDestr;
console.log(vadinamas, skaniausiasPatiekalas, salis, kontinentas);
// 3) Naudodami destructuring priskirkite 1 kintamajam visas masyvo reikšmes išskyrus pirmas 3.
let [,,, ...visosApartPirmuTryju] = masyvasDestr;
// 4) Naudodami destructuring sukeiskite 2 kintamųjų reikšmes.
let a = 5;
let b = 12;
// let c = a;
// a = b;
// b = c;
[a, b] = [b, a];
console.log("a:",a, 'b:',b);


//    Filter tasks:
// 1) Sukurti funkciją, kuri sukurtų A ilgio skaičių masyvą, B ir C intervale. (A - kokio ilgio masyvo norite, B - mažiausias galimas masyvo skaičius, C - didžiausias galimas masyvo skaičius). (naudoti Math.random())

function filterTask1(ilgis, min, max){
  /* 
    0.000001 - 0.99999 Math.random()
    0.000066 - 65.9933 Math.random()*66
    1        - 66      Math.ceil(Math.random()*66)
    1        - 56      Math.ceil(Math.random()*(66-11+1))
    11       - 76      Math.ceil(Math.random()*66)+11-1
    11       - 66      Math.ceil(Math.random()*(66-11+1))+11-1
  */
  let masyvasToReturn = []; 
  for(let i = 0; i < ilgis; i++){
    let random = Math.ceil(Math.random()*(max-min+1))+min-1;
    // console.log(random);
    masyvasToReturn.push(random);
  }
  return masyvasToReturn;
}
let randomSkaiciuMasyvas = filterTask1(23, 11, 66);

// 6 task
function filterTask6(min, max){

}