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