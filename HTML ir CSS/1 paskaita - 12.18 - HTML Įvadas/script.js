document
  .querySelector('#specButton')
  .addEventListener('click', (event) => {
    console.log(event);
    event.target.textContent = 'Paspaudei :)';
    event.target.style.color = 'red';
    event.target.style.backgroundColor = 'white';
    event.target.style.borderStyle = 'dotted';
    event.target.style.borderWidth = '10px';

    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        document.querySelector('#empty').textContent = data.tekstai[Math.floor(Math.random()*3)];
      });
  });