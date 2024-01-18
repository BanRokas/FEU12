// FUNCTIONS

// 5+) Sukurti funkciją, kuri grąžintų 10 ilgio masyvą random skaičių (nuo 0 iki 100).
function uzd_5(){
  let masyvas = [];
  // masyvas[0] = Math.random();
  // masyvas[1] = Math.random();
  // masyvas[2] = Math.random();
  // masyvas[3] = Math.random();
  for(let i = 0; i < 10; i++){
    let random = Math.random()*100;
    //              0 -> 100
    // console.log(random);
    masyvas.push(random); // .toFixed(2)*1
  }
  // console.log(masyvas);
  return masyvas;
}
let uzd_5_ats = uzd_5();
console.log(uzd_5_ats);

// 5.1+) Sukurti funkciją, kuri priimtų argumentą, kuris nurodytų kokio ilgio masyvą su random skaičiais (nuo 0 iki 100) funkcija turi grąžinti.
function uzd_5_1(masyvoIlgis){
  // console.log(masyvoIlgis);
  let masyvas = [];
  for(let i = 0; i < masyvoIlgis; i++){ // 0 1 2
    masyvas.push(Math.random()*100);
  }
  return masyvas;
}
let uzd_5_1_ats0 = uzd_5_1(3);
console.log(uzd_5_1_ats0);
let uzd_5_1_ats1 = uzd_5_1(15);
console.log(uzd_5_1_ats1);
let uzd_5_1_ats2 = uzd_5_1(5);
console.log(uzd_5_1_ats2);

// 5.2++) Sukurti funkciją, kuri priimtų 3 argumentus, kurie nurodytų: 1-kokio ilgio masyvą funkcija turi grąžinti su random skaičiais 2-nuo kokio skaičiaus 3-iki kokio skaičiaus.
function uzd_5_2(masyvoIlgis, minimumRandom, maximumRandom){
  // console.log(masyvoIlgis, minimumRandom, maximumRandom);
  let masyvas = [];
  for(let i = 0; i < masyvoIlgis; i++){
    // console.log(Math.floor((Math.random()*(maximumRandom+1-minimumRandom)+minimumRandom)));
    masyvas.push(Math.floor((Math.random()*(maximumRandom+1-minimumRandom)+minimumRandom)));
  }
  return masyvas;
}
let uzd_5_2_ats = uzd_5_2(12, 5, 13);
console.log(uzd_5_2_ats);
let uzd_5_2_ats1 = uzd_5_2(5, 20, 30);
console.log(uzd_5_2_ats1);

/*      Math.random()*3
    0.000003 -> 2.9999997 .round() =>
    0.000003 -> 0.4999999  0 dvigubai mažesnis šansas
    0.500000 -> 1.4999999  1
    1.500000 -> 2.4999999  2
    2.500000 -> 2.9999997  3 dvigubai mažesnis šansas
*/

// EVENTS

// 8++) Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").

let random = Math.ceil(Math.random()*3);
// console.log(random);
// document.querySelector('#atspek :nth-child(0)')
// document
//   .querySelector('#atspek').children[0]
//   .addEventListener('click', arTas);
// document
//   .querySelector('#atspek').children[1]
//   .addEventListener('click', arTas);
// document
//   .querySelector('#atspek').children[2]
//   .addEventListener('click', arTas);
for(button of document.querySelectorAll('#atspek > button')){
  // console.log(button)
  button.addEventListener('click', arTas);
}
function arTas(event){
  // console.log(event.target.textContent*1);
  if(event.target.textContent*1 === random){
    window.alert("Yay");
  } else {
    window.alert("Nay");
  }
}


/*
  5 Extra) Padaryti taip, kad puslapis su tavimi pasisveikintu naudodamas teisingą galunę (ir tiktų ne tik tavo vardui, o visiem).
    Naudoti: 
      1) let - kurti kintamuosius
      2) prompt - gauti tavo vardą
      3) endsWith | slice | concat - google šiuos string metodus, kad tikrintum ir koreguotum vardą
      4) alert/console.log - grąžinti teisingą pasisveikinimą.
      5) if/elseIf/else - kas be ko...
*/
// Rok as - Rok ai; Nerij us - Nerij au; Nagl is - Nagl i; Stas ys - Stas į; Egl ė - Egl e; Mild a - Mild a;
// let vardas = "Aistis";
// if(vardas.endsWith('as')){
//   let vardoKreipimasis = vardoGalunesKeitimas(1, 'i')
//   console.log(vardoKreipimasis);
// } else if(vardas.endsWith('us')){
//   let vardoKreipimasis = vardoGalunesKeitimas(2, 'au')
//   console.log(vardoKreipimasis);
// } else if(vardas.endsWith('is')){
//   let vardoKreipimasis = vardoGalunesKeitimas(1, '')
//   console.log(vardoKreipimasis);
// } else if(vardas.endsWith('ys')){
//   let vardoKreipimasis = vardoGalunesKeitimas(2, 'į')
//   console.log(vardoKreipimasis);
// } else if(vardas.endsWith('ė')){
//   let vardoKreipimasis = vardoGalunesKeitimas(1, 'e')
//   console.log(vardoKreipimasis);
// } else if(vardas.endsWith('a')){
//   let vardoKreipimasis = vardoGalunesKeitimas(0, '')
//   console.log(vardoKreipimasis);
// } else {
//   console.log(vardas);
// }
function vardoGalunesKeitimas(kiekAtimti, kitaGalune){
  let pradzia = vardas.slice(0, vardas.length-kiekAtimti);
  let vardoKreipimasis = pradzia.concat(kitaGalune);
  return vardoKreipimasis;
}
let vardas = window.prompt('Koks tavo vardas?');
let variacijos = [
  {
    galune: 'as',
    atimti: 1,
    prideti: 'i'
  },{
    galune: 'us',
    atimti: 2,
    prideti: 'au'
  },{
    galune: 'is',
    atimti: 1,
    prideti: ''
  },{
    galune: 'ys',
    atimti: 2,
    prideti: 'į'
  },{
    galune: 'ė',
    atimti: 1,
    prideti: 'e'
  },{
    galune: 'a',
    atimti: 0,
    prideti: ''
  },{
    galune: '',
    atimti: 0,
    prideti: ''
  }
];

for(let i = 0; i < variacijos.length; i++){
  if(vardas.endsWith(variacijos[i].galune)){
    let vardoKreipimasis = vardoGalunesKeitimas(variacijos[i].atimti, variacijos[i].prideti);
    window.alert('Labas ' + vardoKreipimasis + '.');
    break;
  }
}