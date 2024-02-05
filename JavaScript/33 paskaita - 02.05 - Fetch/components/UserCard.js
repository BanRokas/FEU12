import Par from '../../29 paskaita - 01.30 - JS Komponentai (ne React) ir moduliai/modules/Paragraph.js'

export default class UserCard{
  constructor({ name, picture:{large:diffName}, email, location, dob:{age} }){
    this.fullName = `${name.first} ${name.last}`; // "Vardas Pavardė"
    this.photo = diffName;
    this.email = email;
    this.country = location.country;
    this.city = location.city;
    this.age = age;

    return this.render();
  }
  render(){
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('randomUserCard');

    const image = document.createElement('img'); 
    image.setAttribute('src', this.photo);
    image.setAttribute('alt', 'profile picture');

    const heading = document.createElement('h1');
    const headingText = document.createTextNode(this.fullName);
    heading.appendChild(headingText);

    const email = new Par({ tekstas: `Email: ${this.email}` });
    const age = new Par({ tekstas: `Age: ${this.age}` });
    const livesIn = new Par({ tekstas: `Lives in: ${this.city}, ${this.country}` });

    cardDiv.append(image, heading, email, age, livesIn);
    return cardDiv;
  }
}