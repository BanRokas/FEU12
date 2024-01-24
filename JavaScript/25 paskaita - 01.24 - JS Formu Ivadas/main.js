document
  .querySelector('#testForma')
  .addEventListener('submit', event => {
    event.preventDefault(); // neleidžia puslapiui persikrauti
    console.log(event);
    // negerai, nes eiliškumas lengvai pabėgti gali
    // let vardas = event.target[0].value;
    // let nuotrauka = event.target[1].value;
    // let amzius = event.target[2].value;
    // let dob = event.target[3].value;

    // nėra labai gerai, nes negražu :) (ir vos vos lėčiau)
    // let vardas = document.querySelector('#vardas').value;
    // let nuotrauka = document.querySelector('#nuotrauka').value;
    // let amzius = document.querySelector('#amzius').value;
    // let dob = document.querySelector('#dob').value;

    // very good, very nice, very (probly) fast ;)
    // let { vardas, nuotrauka, amzius, dob} = event.target.elements; // gauname visą didžiulį objektą, not very good, a tai dažniausiai norime tik value
    let vardas = event.target.elements.vardas.value;
    let nuotrauka = event.target.elements.nuotrauka.value;
    let amzius = event.target.elements.amzius.valueAsNumber;
    let dob = event.target.elements.dob.value;
    let kelniuDydis = event.target.elements.kelniuDydis.value;
    let muzikosStiliai = [];
    event.target.elements.muzikosStiliai
      .forEach(el => el.checked && muzikosStiliai.push(el.value));
    // document
    //   .querySelectorAll('input[name="muzikosStiliai"]:checked')
    //   .forEach(el => muzikosStiliai.push(el.value));
    // let salisLankyti = event.target.elements.salis.value;
    let salysLankyti = [];
    for(el of event.target.elements.salis.children){
      el.selected && salysLankyti.push(el.value);
    }

    console.log(vardas);
    console.log(nuotrauka);
    console.log(amzius);
    console.log(dob);
    console.log(kelniuDydis);
    console.log(muzikosStiliai);
    console.log(salysLankyti);
  });

//  sudeties forma
document.querySelector('#sudetis')
  .addEventListener('submit', event => {
    event.preventDefault();
    let pirmasDomuo = event.target.elements.sk1.valueAsNumber;
    let antrasDomuo = event.target.elements.sk2.valueAsNumber;
    console.log(pirmasDomuo+antrasDomuo);
  });

// kariuomenes forma
document.querySelector('#kariuomene')
  .addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.elements);
    let amzius = e.target.elements.amzius3.valueAsNumber;
    let arKriminalas = e.target.elements.kriminalas.checked;
    if(amzius > 18 && amzius < 30 && !arKriminalas){
      console.log('Kariuomenė šaukia');
    } else {
      console.log('Nieko');
    }
  });