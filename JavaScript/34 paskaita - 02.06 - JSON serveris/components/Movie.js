export default class Movie{
  constructor({ leidimoData, nuotrauka, pavadinimas, id }){
    this.leidimoData = leidimoData;
    this.nuotrauka = nuotrauka;
    this.pavadinimas = pavadinimas;
    this.id = id;
    return this.render()
  }
  render(){
    const card = document.createElement('div');
    card.classList.add('movieCard');

    const antraste = document.createElement('h1');
    const antrastesTekstas = document.createTextNode(this.pavadinimas);
    antraste.appendChild(antrastesTekstas);

    const paveiksliukas = document.createElement('img');
    paveiksliukas.setAttribute('src', this.nuotrauka);
    paveiksliukas.setAttribute('alt', `movie ${this.pavadinimas} poster`);

    const leidimoMetai = document.createElement('p');
    const leidimoMetaiTekstas = document.createTextNode(this.leidimoData);
    leidimoMetai.appendChild(leidimoMetaiTekstas);

    const trinimoMygtukas = document.createElement('button');
    const trinimoMygtukoTekstas = document.createTextNode('trinti');
    trinimoMygtukas.appendChild(trinimoMygtukoTekstas);
    trinimoMygtukas.classList.add('trinimoMygtukas');

    trinimoMygtukas.addEventListener('click', e => {
      fetch(`http://localhost:3000/filmai/${this.id}`, {
        method: "DELETE"
      });

      card.remove();
    });

    card.append(antraste, paveiksliukas, leidimoMetai, trinimoMygtukas);
    return card;
  }
}