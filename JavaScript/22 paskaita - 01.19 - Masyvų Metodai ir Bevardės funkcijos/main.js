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
    prototype
    prototype
    prototype
    prototype
    prototype
    prototype
    prototype
    prototype

*/