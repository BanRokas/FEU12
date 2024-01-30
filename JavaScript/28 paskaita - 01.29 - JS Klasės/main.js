class Asmuo{
  constructor(vardas, pavarde, gimimoData){
    this.vardas = vardas;
    this.pavarde = pavarde;
    this.dob = gimimoData;
    this.arMiega = false;
    this.pilnasVardas = this.vardas + ' ' + this.pavarde;
    this.amzius = new Date().getFullYear() - this.dob;
    this.inicialai = this.vardas[0]+'.'+this.pavarde[0]+'.';
  }
  eitiMiegoti(){
    if(this.arMiega === true){
      return `${this.vardas} jau miega.`;
    }
    this.arMiega = true;
    return `${this.vardas} nuėjo miegoti.`;
  }
  atsibusti(){
    if(this.arMiega === false){
      return `${this.vardas} jau yra atsibudęs.`;
    }
    this.arMiega = false;
    return `${this.vardas} atsibudo.`;
  }
  helloWorld(){
    return this.vardas + ' sako Hello World!';
  }
  sudeti(sk1, sk2){
    return `${this.vardas} sudeda ${sk1} ir ${sk2} ir gauna atsakymą: ${sk1+sk2}.`;
  }
  pasisveikina(zmogus){
    console.log(zmogus);
    return `${this.vardas} pasisveikina su ${zmogus.vardas}`;
  }
}

let zmogus0 = new Asmuo('Rokas', 'Banaitis', 1996);
let zmogus1 = new Asmuo('Petras', 'Petraitis', 1980);

console.log(zmogus0);
console.log(zmogus1);


class Knyga{
  #pavadinimas; #autorius; #leidimoMetai;
  constructor(pavadinimas, autorius, leidimoMetai){
    this.#pavadinimas = pavadinimas;
    this.#autorius = autorius;
    this.#leidimoMetai = leidimoMetai;
  }
  get Pavadinimas(){
    return this.#pavadinimas;
  }
  set Pavadinimas(naujasPavadinimas){
    this.#pavadinimas = naujasPavadinimas;
  }
  get Autorius(){
    return this.#autorius;
  }
  set Autorius(naujasAutorius){
    this.#autorius = naujasAutorius;
  }
  get leidimoMetai(){
    return this.#leidimoMetai;
  }
  set leidimoMetai(naujasLeidimoMetai){
    this.#leidimoMetai = naujasLeidimoMetai;
  }
  getKnygosAmzius(){
    return new Date().getFullYear() - this.#leidimoMetai;
  }
  static randomStuff(nr){
    return Math.random()*nr;
  }
}

const knygos = [
  new Knyga("Harry Potter", "J.K. Rowling", 2004),
  new Knyga("Lord of the Rings", "J.R.R. Tolkien", 1954)
];

console.log(knygos[1].leidimoMetai);


/* 
  3) Sukurkite klasę vardu "Point" ir duokite jai "x" ir "y" parametrus ir savybes.
    3.1) Sukurkite papildomą savybę "coordinates" ir priskirkite jam "x" ir "y" reikšmes.
    3.2) Sukurkite metodą "distance", kuris grąžina atstumą tarp dviejų taškų (Point'ų). (siūlau naudoti Math.hypot() metodą).
  5) UI
*/

class PointDiv{
  constructor(point){
    this.point = point;
    return this.render();
  }
  
  smile(){
    console.log('smile :)');
  }
  render(){
    // console.log(this.point);
    const div = document.createElement('div');
    const p1 = document.createElement('p');
    const text1 = document.createTextNode('(x; y)');
    p1.appendChild(text1);
    const p2 = document.createElement('p');
    const text2 = document.createTextNode(this.point.coordinates);
    p2.appendChild(text2);
    div.append(p1, p2);
    div.addEventListener('click', () => this.smile());
    return div;
  }
}
class Option{
  constructor(point){
    this.point = point;
    return this.render();
  }
  render(){
    const option = document.createElement('option');
    const text = document.createTextNode(this.point.coordinates);
    option.setAttribute('value', [this.point.x, this.point.y]);
    option.appendChild(text);
    return option;
  }
}
class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.coordinates = `(${this.x}; ${this.y})`;
  }
  distance(point){
    return Math.hypot(this.x + point.x, this.y + point.y);
  }
}
const addOptions = (point) => {
  const option1 = new Option(point);
  const option2 = new Option(point);

  document.querySelector('form#atstumuSkaiciavimas select#pointA').appendChild(option1);
  document.querySelector('form#atstumuSkaiciavimas select#pointB').appendChild(option2);
}

const points = [
  new Point(0, 0),
  new Point(0, 3),
  new Point(4, 0),
  new Point(9, 5),
  new Point(12, 4),
  new Point(8, 3)
];

points.forEach(point => {
  const pointElement = new PointDiv(point);
  // console.log(point);

  document.querySelector('#taskai').appendChild(pointElement);

  addOptions(point);
});

document
  .querySelector('form#kurtiTaska')
  .addEventListener('submit', e => {
    e.preventDefault();
    const x = e.target.elements.coordX.valueAsNumber;
    const y = e.target.elements.coordY.valueAsNumber;

    const point = new Point(x, y);
    const pointElement = new PointDiv(point);
    document.querySelector('#taskai').appendChild(pointElement);
    points.push(point);

    addOptions(point);

    e.target.reset();
  });

document
  .querySelector('form#atstumuSkaiciavimas')
  .addEventListener('submit', e => {
    e.preventDefault();
    const pointA = e.target.elements.pointA.value.split(',');
    const pointB = e.target.elements.pointB.value.split(',');
    // console.log(pointA, pointB);
    const distance = Math.hypot(
      pointA[0] - pointB[0],
      pointA[1] - pointB[1]
    ).toFixed(2);
    // console.log(distance);

    const p = document.createElement('p');
    // const text = document.createTextNode(
    //   `Distance between Point in position (${pointA}) and Point in position (${pointB}) is ${distance}.`
    // );
    const span = document.createElement('span');
    span.classList.add('evil');
    const text0 = document.createTextNode(
      `Point A (${pointA[0]};${pointA[1]})__________`
    );
    const text1 = document.createTextNode(
      `distance:${distance}`
    );
    const text2 = document.createTextNode(
      `__________(${pointB[0]};${pointB[1]}) Point B`
    );
    span.appendChild(text1);
    p.append(text0, span, text2);
    document.querySelector('#atstumai').appendChild(p);

    e.target.reset();
  });
  
  // tingiu pridėt visko atvaizdavimą canvas'e