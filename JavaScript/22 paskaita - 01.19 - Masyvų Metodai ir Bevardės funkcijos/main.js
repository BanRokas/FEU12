/*      FUNKCIJOS
  Funkcija - kažkoks užvadintas kodas, kurį galima išsikviesti bet kuriuo metu ir bet kiek kartų. Funkcijos kodas nėra vykdomas kol ji nėra iškviečiama.

  Syntax:
    function randomFunctionName(par1, par2, ...){ ... veiksmai ... }
  Call:
    randomFunctionName(arg1, arg2, ...);

  Parametras - funkcijos aprašymo viduje naudojami duomenys, kurie gaunami funkcijos iškvietimo metu. (su kiekvienu iškvietimu gali skirtis)
  Argumentas - duomenys, kuriuos paduodi funkcijai ją iškviesdamas.

      Callback
  Callback - iškvietimas ir grįžtamasis ryšys.
  Kai funkcija arba metodas kreipiasi į kitą funkciją.
      Anonymous/Nameless Functions / Anoniminės/Bevardės Funkcijos
  Funkcijos, kurioms nėra priskiriamas vardas. 
  Kitaip pasakius, tai funkcijos, kurios naudojamas tik kaip koks nors callback'as.
    Syntax:
      function (par1, par2, ...) { ... veiksmai ... }

      Arrow Function / Lambda
  ES6 versijoje buvo pristatytas naujas būdas aprašyti bevardes funkcijas.
    Syntax:
      () => { ... veiksmai ... }
      (par1, par2, ...) => { ... veiksmai ... }
      par => { ... veiksmai ... }
      () => veiksmas
      (par1, par2, ...) => veiksmas
      par => veiksmas

  Arrow funkcijos gali būti užvadinamos. Norint sukurti vardinę funkciją naudojant arrow function, reikia sukurti kintamąjį, kuriam ta arrow funkcija yra prilyginama.
    const funcName = () => {}
*/
console.log(suma(5, 9));
function suma(sk1, sk2){ // hoist'inamas į kodo pradžią
  let suma = sk1+sk2
  return suma;
}

const daugyba = (sk1, sk2) => sk1*sk2; // nėra hoist'inama į kodo pradžią
console.log(daugyba(3,4));

/*      Objects
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

  Metodai:
    Object.keys(objektas) - grąžina objektas raktinius žodžius kaip string'ų masyvą.
    ...
*/
const objektas = {a:'pirma', b:'antra', hehe:'trecia'};
const objektoRaktai = Object.keys(objektas);
console.log(objektoRaktai);

/*      Array
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

  Savybės/Properties:
    prototype.length - grąžina masyvo ilgį (skaičius iš kelių elementų masyvas sudarytas)
  Metodai:
    prototype.at(index) - grąžina masyvo elementą esantį nurodytame indekse
    prototype.concat(arr1, arr2, ...) - grąžina masyvų junginį kaip naują masyvą
    prototype.fill(value, start, end) - užpildo masyvą nurodytomis reikšmėmis (value) nuo nurodytos pozicijos (start) iki nurodytos pozicijos (end). MODIFIKUOJA originalų masyvą ir grąžina modifikuotą.
    prototype.includes(value) - tikrina ar masyve yra nurodyta reikšmė (value). Grąžina true arba false.
    prototype.indexOf(value, from) - grąžina ieškomos reikšmės (value) indeksą masyve nuo nurodytos pozicijos (from). Jeigu neranda - grąžina -1;
    prototype.lastIndexOf(value, from) - grąžina ieškomos reikšmės (value) indeksą masyve nuo nurodytos pozicijos (from) nuo masyvo galo. Jeigu neranda - grąžina -1;
    .isArray(value) - tikrina ar value (reikšmė) yra masyvas.
    prototype.join(separator) - grąžina apjungtas masyvo reikšmės į string'ą atskirtas nurodytu skirtuku (separator). NEmodifikuoja originalaus masyvo.
    .of(value1, value2, value3, ...) - sugeneruoja masyvą su nurodytomos reikšmėmis
    prototype.pop()
    prototype.push(value)
    prototype.shift()
    prototype.unshift(value)
    prototype.reverse() - apsuka masyvą iš kito galo. MODIFIKUOJA originalų masyvą
    prototype.toReversed() - grąžina apsuktą masyvą iš kito galo. NEmodifikuoja originalaus masyvo.
    prototype.slice(from, to)
    prototype.sort(compareFn)
    prototype.toSorted(compareFn) - grąžina naują surikiuotą masyvą. NEmodifikuoja originalaus masyvo.
    prototype.splice(start, deleteCount, value1, value2, ...)
    prototype.toSpliced(start, deleteCount, value1, value2, ...) - grąžina naują pakeistą masyvą. NEmodifikuoja originalaus masyvo.
    prototype.with(index, value) - grąžina naują masyvą, kuriame nurodytame indekse reikšmė yra pakeista į nurodytą value (reikšmę). NEmodifikuoja originalaus masyvo.
      prototype[index] = value; - originalus masyvas yra MODIFIKUOJAMAS.
*/