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
    const info = {
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
    console.log(info);
  });