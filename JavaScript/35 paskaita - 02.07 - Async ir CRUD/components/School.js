import DeleteDialog from "./DeleteDialog.js";
import EditDialog from "./EditDialog.js";

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
      document.body.appendChild(confirmModal);
      confirmModal.showModal();
    });
    
    const editIcon = document.createElement('span');
    editIcon.classList.add('bi', 'bi-pencil-fill');
    editIcon.addEventListener('click', () => this.editFunctionality(heading, par));

    cardDiv.append(heading, par, removeIcon, editIcon);
    return cardDiv;
  }
  editFunctionality(heading, par){
    const editModal = new EditDialog();
    document.body.appendChild(editModal);
    editModal.showModal();

    const form = document.createElement('form');
    
    const divName = document.createElement('div');
    const labelName = document.createElement('label');
    const labelNameText = document.createTextNode('Pavadinimas');
    labelName.setAttribute('for', 'name')
    labelName.appendChild(labelNameText);
    const inputName = document.createElement('input');
    inputName.setAttribute('type', 'text');
    inputName.setAttribute('name', 'name');
    inputName.setAttribute('id', 'name');
    inputName.setAttribute('value', this.name);
    divName.append(labelName, inputName);

    const divCity = document.createElement('div');
    const labelCity = document.createElement('label');
    const labelCityText = document.createTextNode('Miestas');
    labelCity.setAttribute('for', 'city');
    labelCity.appendChild(labelCityText);
    const selectCity = document.createElement('select');
    selectCity.setAttribute('name', 'city');
    selectCity.setAttribute('id', 'city');
    const cities = ["Kaunas", "Vilnius", "Klaipėda", "Šiauliai", "Panevėžys", "Alytus", "Ukmergė", "Tauragė", "Utena"];
    cities.forEach(miestas => {
      const option = document.createElement('option');
      const optionText = document.createTextNode(miestas);
      option.appendChild(optionText);
      option.setAttribute('value', miestas);
      selectCity.appendChild(option);
    });
    const index = cities.indexOf(this.city);
    selectCity.selectedIndex = index;
    // console.dir(selectCity);
    divCity.append(labelCity, selectCity);

    const divFNr = document.createElement('div');
    const labelFNr = document.createElement('label');
    const labelFNrText = document.createTextNode('Fakultetų kiekis');
    labelFNr.setAttribute('for', 'fNr');
    labelFNr.appendChild(labelFNrText);
    const inputFNr = document.createElement('input');
    inputFNr.setAttribute('type', 'number');
    inputFNr.setAttribute('name', 'fNr');
    inputFNr.setAttribute('id', 'fNr');
    inputFNr.setAttribute('value', this.fNr);
    divFNr.append(labelFNr, inputFNr);

    const submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('value', 'Redaguoti');

    form.append(divName, divCity, divFNr, submitInput);
    editModal.appendChild(form);

    form.addEventListener('submit', e => {
      e.preventDefault();

      const inputs = {
        pavadinimas: e.target.elements.name.value,
        miestas: e.target.elements.city.value,
        fakultetuKiekis: e.target.elements.fNr.valueAsNumber
      };
      // keičiame JSON'e
      fetch(`http://localhost:8080/school/${this.id}`,{
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(inputs)
      });

      // keičiame kortelės instanciją
      this.name = inputs.pavadinimas;
      this.city = inputs.miestas;
      this.fNr = inputs.fakultetuKiekis;

      // keičiame kortelių vaizdą ekrane
      heading.textContent = this.name;
      par.textContent = `${this.name} įsteigtas ${this.city} ir visoje šalyje turi ${this.fNr} fakultetus.`;

      editModal.remove();
    });
  }
}