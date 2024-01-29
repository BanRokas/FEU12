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