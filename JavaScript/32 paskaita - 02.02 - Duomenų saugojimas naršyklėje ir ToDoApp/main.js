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