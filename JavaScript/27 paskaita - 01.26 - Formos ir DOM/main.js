document
  .querySelector('#vardoTask')
  .addEventListener('submit', e => {
    e.preventDefault();
    console.dir(e.target)
    const vardas = e.target.elements.vardas.value.trim()+' ';
    const kartai = e.target.elements.kartai.valueAsNumber;
    const atsLaukas = e.target.nextElementSibling;
    atsLaukas.textContent = '';
    console.log(vardas, kartai);
    // let combo = '';
    for(let i = 1; i <= kartai; i++){
      const par = document.createElement('p');
      // combo+=vardas+' ';
      // const parText = document.createTextNode(combo.trimEnd());
      const parText = document.createTextNode(vardas.repeat(i).trimEnd());
      par.appendChild(parText);
      atsLaukas.appendChild(par);
    }
    e.target.reset();
  });

// telefono taisymo forma
document
  .querySelector('#telTaisymas')
  .addEventListener('submit', e => {
    e.preventDefault();
    const el = e.target.elements;
    const data = {
      vardas: el.asmuo.value,
      kontaktas: el.kontaktas.value,
      modelis: el.modelis.value,
      foto: el.nuotrauka.value,
      garantinis: el.garantija.checked,
      draudimas: el.draudimas.checked,
      gedimas: el.gedimas.value,
      lokacija: el.lokacija.value,
      dataLaikas: el.dataLaikas.value
    };
    console.log(data);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('telCard');

    const lokacija = document.createElement('h2');
    const lokacijaText = document.createTextNode(data.lokacija);
    lokacija.appendChild(lokacijaText);

    const vardas = document.createElement('p');
    const vardasText = document.createTextNode(`${data.vardas} ir ${data.kontaktas}`);
    vardas.appendChild(vardasText);

    const atnesti = document.createElement('p');
    const atnestiText = document.createTextNode(`Data: ${data.dataLaikas.slice(0,10)} Laikas:${data.dataLaikas.slice(11)}`);
    atnesti.appendChild(atnestiText);

    const modelis = document.createElement('h3');
    const modelisText = document.createTextNode(data.modelis);
    modelis.appendChild(modelisText);

    const aprasymas = document.createElement('p');
    const aprasymasText = document.createTextNode(data.gedimas);
    aprasymas.appendChild(aprasymasText);

    const paveiksliukas = document.createElement('img');
    paveiksliukas.setAttribute('src', data.foto);
    paveiksliukas.setAttribute('alt', 'sugedusio telefono nuotrauka');

    const draudimasIrGarantija = document.createElement('p');
    const draudimas = document.createElement('span');
    const draudimasText = document.createTextNode('Draudimas');
    draudimas.appendChild(draudimasText);
    if(data.draudimas){
      draudimas.classList.add('greenText');
    } else {
      draudimas.classList.add('redText');
    }
    const garantija = document.createElement('span');
    const garantijaText = document.createTextNode('Garantija');
    garantija.appendChild(garantijaText);
    // data.garantinis ? garantija.classList.add('greenText') : garantija.classList.add('redText');
    garantija.classList.add(data.garantinis ? 'greenText' : 'redText');
    draudimasIrGarantija.append(draudimas, garantija);

    cardDiv.append(lokacija, vardas, atnesti, modelis, aprasymas, paveiksliukas, draudimasIrGarantija);

    document.querySelector('#phoneContainer').appendChild(cardDiv);
  });