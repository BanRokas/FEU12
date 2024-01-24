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
    

    console.log(vardas, nuotrauka, amzius, dob);
  });