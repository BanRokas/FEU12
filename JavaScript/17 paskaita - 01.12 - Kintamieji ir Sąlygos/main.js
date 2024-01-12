/*          Kintamieji (masyvai ir objektai)
  string, number, boolean - vakar mokinomės

  objektas/object - { raktinisZodis:reiksme, kitasRaktinisZodis:reiksme }
    Grupuoti kintamuosius
    Reikšmės turi savo unikalius raktinius žodžius
    Eiliškumas nėra svarbus
    Naudojamas norint kažkokį dalyką __APRAŠYTI__

  masyvas/array - [ reiksme, reiksme, reiksme, reiksme ]
    Grupuoti kintamuosius
    Reikšmės neturi raktinių žodžių, tai kiekviena reikšmė turi savo indekso numerį
    Eiliškumas YRA svarbus
    Naudojamas norint __IŠVARDINTI__ vieno tipo dalykus (vardus, mašinas, skaičius...)

  Tiek objektas, tiek masyvas yra konteineriniai kintamieji, skirti talpinti kitus kintamuosius (number, string, boolean, masyvai, objektai)
*/

console.group("Objektai ir Masyvai intro");
  let objektas = { kitasRaktinisZodis:654*2, pavadinimas:"Konstantinopolis", raktinisZodis:false };
  console.log(objektas);
  let masyvas = [ "reiksme0", 32, "reiksme2", false, "dar kažkas" ];
  console.log(masyvas);

  let blogasMasyvas = ["Rokas", "Banaitis", 186, 27, 80, "ruda", "mėlyna", false];
  let blogasObjektas = { pirmas:"BMW", antras: "Audi", trecias: "Mercedes" };
  let gerasObjektas = {
    vardas: "Rokas",
    pavarde: "Banaitis",
    ugis: 186,
    issimiegojes: false
  };
  let gerasMasyvas = ["BMW", "Audi", "Mercedes", "Fiat", "Opel", "Volvo", "Tesla"];

  // objekto kreipimasis
  console.log(gerasObjektas);
  console.log(gerasObjektas.vardas); // "Rokas"
  console.log(gerasObjektas.ugis); // 186

  // masyvo kreipimasis
  console.log(gerasMasyvas);
  console.log(gerasMasyvas[0]); // "BMW"
  console.log(gerasMasyvas[3]); // "Fiat"
console.groupEnd();