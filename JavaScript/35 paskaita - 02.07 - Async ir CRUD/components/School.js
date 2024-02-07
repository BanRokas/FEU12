import DeleteDialog from "./DeleteDialog.js";

export default class School{
  constructor({ id, pavadinimas:name, miestas:city, fakultetuKiekis:fNr }){
    this.id = id;
    this.name = name;
    this.city = city;
    this.fNr = fNr;
    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    const heading = document.createElement('h1');
    const headingText = document.createTextNode(this.name);
    heading.appendChild(headingText);

    const par = document.createElement('p');
    const parText = document.createTextNode(`${this.name} įsteigtas ${this.city} ir visoje šalyje turi ${this.fNr} fakultetus.`);
    par.appendChild(parText);

    const removeIcon = document.createElement('span');
    removeIcon.classList.add('bi', 'bi-x-circle-fill');
    removeIcon.addEventListener('click', () => {
      const confirmModal = new DeleteDialog({
        id: this.id,
        el: cardDiv
      });
      document.body.append(confirmModal);
      confirmModal.showModal();
    });

    cardDiv.append(heading, par, removeIcon);
    return cardDiv;
  }
}