//    Cookies
// susikurti cookie:
document.cookie = 'name=value';
document.cookie = 'vardas=Rokas';
document.cookie = 'grybas=pievagrybis';
document.cookie = `masyvas=[1,2,3,'hallo', false]`;
document.cookie = `objektas={raktas:'reiksme', skaicius:5}`;
// document.cookie = `expire=after some time; expires=${new Date('Fri Feb 02 2024 10:00')}`;

console.groupCollapsed('cookies');
// pasiimti cookies
console.log(document.cookie);
const cookiesObj = {};
document.cookie.split('; ').forEach(cookie => {
  console.log(cookie);
  const cookieElements = cookie.split('=');
  console.log(cookieElements);
  cookiesObj[cookieElements[0]] = cookieElements[1];
  // galima sužaisti, kad paversti masyvus/objektus į actual objektus/masyvus, o ne string'us kaip kad turime dabar
});
console.log(cookiesObj);
console.groupEnd();

//      Session/Local Storage

// sessionStorage.setItem('vardas', 'Rokas');
// sessionStorage.setItem('amzius', 27);

localStorage.setItem('vardas', 'Rokas');
localStorage.setItem('amzius', 27);
localStorage.setItem('alkanas', true);
// localStorage.setItem('vardas0', 'Petras');
// localStorage.setItem('amzius0', 50);
// localStorage.setItem('alkanas0', false);

console.groupCollapsed('local simple')
const amzius = localStorage.getItem('amzius');
console.log(amzius, typeof(amzius));

// localStorage.removeItem('alkanas');
// localStorage.clear();

const something = localStorage.key(2);
console.log(something);
console.log(localStorage.getItem(something));
console.log(localStorage.length);

for(let i = 0; i < localStorage.length; i++){
  const something0 = localStorage.key(i);
  console.log(something0);
  console.log(localStorage.getItem(something0));
}
console.groupEnd();

const asmenys = [
  {
    vardas: "Rokas",
    amzius: 27,
    alkanas: true
  },{
    vardas: "Petras",
    amzius: 50,
    alkanas: false
  },{
    vardas: "Jonas",
    amzius: 10,
    alkanas: true
  },{
    vardas: "Kazys",
    amzius: 80,
    alkanas: false
  }
];
// localStorage.setItem('asmenys', asmenys);// bad nes saugoja kaip string ir gaunasi - [object Object],[object Object],[object Object],[object Object]
localStorage.setItem('asmenys', JSON.stringify(asmenys));
console.log(JSON.parse(localStorage.getItem('asmenys')));