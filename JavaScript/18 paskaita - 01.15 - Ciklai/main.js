/* 4 masyvo metodai ir 1 property
  pop()      - iš masyvo galo išima reikšmę, ją grąžina ir modifikuoja originalų masyvą
  push()     - į masyvo galą prideda naują reikšmę, grąžina papildyto masyvo ilgį ir modifikuoja originalų masyvą
  shift()    - iš masyvo pradžios išima reikšmę, ją grąžina ir modifikuoja originalų masyvą
  unshift()  - į masyvo pradžią prideda naują reikšmę, grąžina papildyto masyvo ilgį ir modifikuoja originalų masyvą

  length     - grąžina masyvo ilgį
*/
let masyvasTestui = ['a','b','c','d','e','f'];
console.groupCollapsed('masyvo metodai ir property');
  console.log(masyvasTestui);
  console.log(masyvasTestui.pop());
  console.log(masyvasTestui);
  console.log(masyvasTestui.push('hallo'));
  console.log(masyvasTestui);
  console.log(masyvasTestui.shift());
  console.log(masyvasTestui);
  console.log(masyvasTestui.unshift('hihi'));
  console.log(masyvasTestui);
  console.log(masyvasTestui.length);
console.groupEnd();

//        Ciklai / Loops
/*
  Ciklas? Loop? - besikartojantys veiksmai

  Ciklai vykdomi tol, kol yra tenkinama nurodyta sąlyga
    Gali vykti numatytą kiekį kartų
    Gali vykti nenumatyta kiekį kartų
    Gali vykti begalybę kartų - BLOGAI. Vykta kai nurodoma neteisinga sąlyga.

  Ciklų tipai:
    for(skaitliukoSukūrimas; sąlyga; skaitliukoKitimas) { ... veiksmai ... } - naudojamas kai galima apskaičiuoti ciklų kiekį
      for of - masyvams
      for in - objektams
    while(sąlyga){ ... veiksmai ... } - naudojamas kai negalima apskaičiuoti ciklų kiekio
      do{ ... veiksmai ... } while(sąlyga) - pradžioje padaro veiksmą, po to tikrina sąlygą
    masyvų iteraciniai metodai:
      forEach()
      filter()
      map()
      reduce()
      some()
      every()
      flatMap()
      reduceRight()
      find()
      findLast()
      findIndex()
      findLastIndex()

  Operatoriai:
    kintamasis++ - didina kintamąjį vienetu PO ciklo iteracijos
    kintamasis-- - mažina kintamąjį vienetu PO ciklo iteracijos
    ++kintamasis - didina kintamąjį vienetu PRIEŠ ciklo iteraciją
    --kintamasis - mažina kintamąjį vienetu PRIEŠ ciklo iteraciją
    kintamasis+=x - didina kintamąjį x'u PO ciklo iteracijos
    kintamasis-=x - mažina kintamąjį x'u PO ciklo iteracijos
*/

//    for
console.groupCollapsed('for');
  console.log('Labas rytas 1');
  console.log('Labas rytas 2');
  console.log('Labas rytas 3');
  console.log('Labas rytas 4');
  console.log('Labas rytas 5');
  console.log('Labas rytas 6');
  console.log('Labas rytas 7');
  console.log('Labas rytas 8');
  console.log('Labas rytas 9');
  console.log('Labas rytas 10');
  console.log('--------------');
  for(let i = 1; i <= 10; i++){
    console.log('Labas rytas ' + i);
  }
  console.log('Už ciklo');
console.groupEnd();

// while
console.groupCollapsed('while');
  let iteracija = 1;
  while(iteracija <= 10){
    console.log('while ciklas ' + iteracija);
    iteracija++;
  }
  console.log('Už ciklo');
  let masyvasWhile = ['a','b','c','d','e','f'];
  while(masyvasWhile.length){ // !== 0; > 0;
    console.log(masyvasWhile.shift());
  }
  console.log('Už ciklo');
  let randomSkaicius = undefined;
  while(randomSkaicius%2!==0){
    randomSkaicius = Math.ceil(Math.random()*1000);
    console.log(randomSkaicius);
  }
  console.log("Skaičius " + randomSkaicius + ' yra lyginis.');
console.groupEnd();

// for of
console.group('for of');
  let masyvasForOf = ['a','b','c','d','e','f'];
  for(masyvoElementas of masyvasForOf){
    console.log(masyvoElementas);
  }
console.groupEnd();

// for in
console.group('for in');
  let objektasForIn = {
    pirmas: 'vienetas',
    antras: 'dvejetas',
    trecias: 'hihi',
    ketvirtas: 654,
    darKazkas: false
  };
  console.log(objektasForIn.pirmas);
  for(keyWord in objektasForIn){
    console.log(keyWord, objektasForIn[keyWord]); // weird
  }
console.groupEnd();