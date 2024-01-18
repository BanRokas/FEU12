//        METODAI
/*
  Metodas - jau sukurta funkcija, kuri priklauso kažkuriam specifiniam elementui/kintamąjam.
  Savybė/Property - jau sukurta ir priskirta bei nekintanti reikšmė skirta kintamojo tipui.
  Metodai skirti tam, kad pagreitintų / palengvintų programuotojo darbą.

  Metodai gali būti prototipiniai arba ne. Prototipinio atveju kreipiamės į metodą ar savybę per kintamąjį. Ne prototipinio atveju kreipiamės į metodą ar savybę per globalų kintamojo tipą.
  Tipas.prototype.metodas/savybė - kintamasis.metodas()/savybe
  Tipas.metodas/savybė - Tipas.metodas()/savybe
*/

/*  Boolean
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

  Metodai:
    prototype.toString() - paverčia į string tipo kintamąjį
    prototype.valueOf() - grąžina kintamojo reikšmę
*/
let tiesa = true;
console.log(tiesa);
console.log(tiesa.toString());
console.log(tiesa.valueOf());

console.log('-------------------');

/*  Number
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  Integer / Int - sveikasis skaičius (1,2,3,0,-1,-2,-3, ...)
  Float - realusis skaičius (1.321,2.321,0.121,-5.15, ...)

  Savybės:
    .EPSILON - grąžina epsilon
    .MAX_SAFE_INTEGER - maksimalus skaičius, su kuriuo dar galima atlikti veiksmus
    .MIN_SAFE_INTEGER - minimalus skaičius, su kuriuo dar galima atlikti veiksmus
    .MAX_VALUE
    .MIN_VALUE
    .POSITIVE_INFINITY
    .NEGATIVE_INFINITY
    .NaN - grąžina NaN
  Metodai:
    .isFinite(skaicius) - ar skaičius nėra begalinis
    .isInteger(skaicius) - ar skaičius sveikasis
    .isSafeInteger(skaicius) - ar neviršija 9007199254740991
    .isNaN(kazkas) - ar NaN
    .parseInt(kazkas) - verčia į sveikąjį skaičių
    .parseFloat(kazkas) - verčia į realųjį skaičių
    .prototype.toFixed(nr) - kiek (nr) skaičių už kablelio (suapvalinus)
    .prototype.toPrecision(nr) - kokio (nr) ilgio skaičius
*/

/*  Math
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

  Savybės:
    .PI - grąžina PI (3.141592653589793)
    ...
  Metodai:
    .cbrt(nr) - kūbinė nr šaknis
    .sqrt(nr) - kvadratinė nr šaknis
    .pow(nr, laipsnis) - kelia nr laipsniu
    .floor(nr) - suapvalina nr iki mažesnio sveiko
    .ceil(nr) - suapvalina nr iki didesnio sveiko
    .round(nr) - suapvalina nr pagal apvalinimo taisykles
    .hypot(nr1, nr2, ...) - pitagoras nr1, nr2, ...
    .max(nr1, nr2, nr3, ...) - didžiausias iš nr1, nr2, nr3, ...
    .min(nr1, nr2, nr3, ...) - mažiausias iš nr1, nr2, nr3, ...
    .random() - grąžina random skaičių nuo 0 iki 1
    .sign(nr) - ar nr teigiamas(1) ar neigiamas(-1) ar 0(0)
    .trunc(nr) - paverčia nr sveikuoju skaičiumi (panaikina viską kas už kablelio)
    ...
*/

/*  String
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

  Savybės:
    prototype.length - grąžina string'o ilgį

  Metodai:
    prototype.at(nr) - simbolis nurodytoje pozicijoje (galima nuo galo su minusu)
    prototype.charAt(nr) - simbolis nurodytoje pozicijoje.
      'zodis'[nr] - simbolis nurodytoje pozicijoje.
    prototype.charCodeAt(nr) - simbolio esančio nr pozicijoje UTF-16 simbolių bibliotekos indeksas (ą - 261, ū - 363)
    prototype.concat() - 
    prototype.endsWith() - 
    .fromCharCode(pozicija) - grąžina simbolį pagal jo poziciją UTF-16 simbolių bibliotekoje
    .fromCodePoint(pozicija) - grąžina simbolį pagal jo poziciją UTF-16 simbolių bibliotekoje
    prototype.includes(zodis, pozicija) - ar egzistuoja zodis nuo pozicijos
    prototype.indexOf(zodis, pozicijos) - grąžina indeksą pirmojo rasto nurodyto zodzio nuo nurodytos pozicijos
    prototype.lastIndexOf(zodis, pozicijos) - grąžina indeksą pirmojo rasto nurodyto zodzio nuo nurodytos pozicijos nuo galo
    prototype.localeCompare(zodis, locale, { options }) - palygina žodžius ir grąžina 1 arba -1 arba 0
    prototype.match(regex) - ar atitinka bent vieną regex
    prototype.matchAll(regex) - ar atitinka visus regex
    prototype.padStart(ilgis, string) - pildo žodį string'ais pradžioje kol pasiekiamas norimas ilgis
    prototype.padEnd(ilgis, string) - pildo žodį string'ais gale kol pasiekiamas norimas ilgis
    .raw(string) - atvaizduoja visus simbolius, net ir escape sequence
    prototype.repeat(kartai) - atkartoja string'ą nurodytą kiekį kartų
    prototype.replace('ka','kuom') - pakeičia pirmą rastą (ką) (gali būti regex) tavo nurodytu (kuom)
    prototype.repalceAll('ka','kuom') - pakeičia visus rastus (ką) (gali būti regex) tavo nurodytu (kuom)
    prototype.slice(nuo, iki) - 
    prototype.split(skirtukas) - sukarpo string'ą į masyvą ties skirtukais (kurie gali būti regex)
    prototype.startsWith(simboliai) - ar string'as prasideda simboliais
    prototype.substring(nuo, kiek, ka1, ka2, ka3, ...) - 
    prototype.toLowerCase() - paverčia string'ą į mažąsias raides
    prototype.toUpperCase() - paverčia string'ą į didžiąsias raides
    prototype.trimStart() - panaikina tarpus pradžioje
    prototype.trimEnd()- panaikina tarpus gale
    prototype.trim() - panaikina tarpus ir pradžioje ir gale
*/

// Patikrinti ar vartotojo įvestis prasideda didžiąja raide.
let vartotojoIvestis = 'Labas rytas';
// let pirmojiRaide = vartotojoIvestis.slice(0, 1);
let pirmojiRaide = vartotojoIvestis[0]; // charAt(0), at(0)
// console.log(pirmojiRaide);
let isdidintaPirmojiRaide = pirmojiRaide.toUpperCase();
// console.log(isdidintaPirmojiRaide);
if(pirmojiRaide === isdidintaPirmojiRaide){
// if(vartotojoIvestis[0] === vartotojoIvestis[0].toUpperCase()){
  console.log(vartotojoIvestis, "- pirmoji raidė yra didžioji.");
} else {
  console.log(vartotojoIvestis, "- pirmoji raidė nėra didžioji.");
}