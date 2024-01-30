export default class Dog{
  //      1 būdas
  // constructor({veisle, vardas, spalva, amzius, svoris, lytis, cipuotas, nuotrauka}){
  //   this.veisle = veisle;
  //   this.vardas = vardas;
  //   this.spalva = spalva;
  //   this.amzius = amzius;
  //   this.svoris = svoris;
  //   this.lytis = lytis;
  //   this.cipuotas = cipuotas;
  //   this.nuotrauka = nuotrauka;
  // }
  //      2 būdas
  // constructor(props){
  //   this.props = props;
  // }
  // metodas(){
  //   return this.props.amzius;
  // }
  //      3 būdas
  constructor({ veisle, vardas, spalva, lytis, cipuotas, amzius, svoris, nuotrauka, ...rest }){
    this.veisle = veisle;
    this.vardas = vardas;
    this.spalva = spalva;
    this.amzius = amzius;
    this.svoris = svoris;
    this.lytis = lytis;
    this.cipuotas = cipuotas;
    this.nuotrauka = nuotrauka;
    this.rest = rest;
    return this.render();
  }
  render(){
    const divCard = document.createElement('div');
    divCard.classList.add('card');

    const pavadinimas = document.createElement('h1');
    const pavadinimasText = document.createTextNode(`${this.veisle} vardu ${this.vardas}`);
    pavadinimas.appendChild(pavadinimasText);
    // divCard.appendChild(pavadinimas);

    const image = document.createElement('img');
    image.setAttribute('src', this.nuotrauka);
    image.setAttribute('alt', `Šuo ${this.veisle}`);
    // divCard.appendChild(image);

    const bendraInfo = document.createElement('div');
    bendraInfo.classList.add('dogInfoGrid');

    const amzius = document.createElement('p');
    const amziusText = document.createTextNode(`${this.amzius} metų amžiaus`);
    amzius.appendChild(amziusText);

    const svoris = document.createElement('p');
    const svorisText = document.createTextNode(`${this.svoris} kg. svorio`);
    svoris.appendChild(svorisText);

    const cipuotas = document.createElement('p');
    const cipuotasText = document.createTextNode(' Čipuotas?');
    const cipuotasIkona = document.createElement('span');
    cipuotasIkona.classList.add('bi');
    cipuotasIkona.classList.add(this.cipuotas ? 'bi-check-circle' : 'bi-x-circle');
    cipuotas.append(cipuotasIkona, cipuotasText);

    const lytis = document.createElement('p');
    const lytisText = document.createTextNode(' Lytis');
    const lytisIkona = document.createElement('span');
    lytisIkona.classList.add('bi');
    lytisIkona.classList.add(this.lytis === 'patinas' ? 'bi-gender-male' : this.lytis === 'patelė' ?'bi-gender-female' : 'bi-question-circle');
    lytis.append(lytisIkona, lytisText);

    const pet = document.createElement('h1');
    const petAmountEl = document.createElement('span');
    petAmountEl.textContent = 0;
    const petText0 = document.createTextNode(`Was pet `);
    const petText1 = document.createTextNode(` times today`);
    pet.append(petText0, petAmountEl, petText1);

    image.addEventListener('click', (e) => {
      // const currNr = e.target.nextElementSibling.nextElementSibling.children[0].textContent*1;
      // e.target.nextElementSibling.nextElementSibling.children[0].textContent = currNr+1;
      petAmountEl.textContent = petAmountEl.textContent*1+1;
    });

    bendraInfo.append(amzius, svoris, cipuotas, lytis);
    divCard.append(pavadinimas, image, bendraInfo, pet);
    return divCard;
  }
}

export const graziausiVardai = ['Pikachu', 'Šuo', 'Kapučinas', 'Patriotas'];

// export default Dog;