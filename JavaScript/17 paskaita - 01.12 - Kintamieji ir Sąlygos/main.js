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

console.groupCollapsed("Objektai ir Masyvai intro");
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

console.group("Nest'inti masyvai ir objektai");
  console.groupCollapsed("masyvas masyve");
    // JS'e rečiausiai susiduriama situacija
    let matrica = [
      ["00", "01", "02"],
      ["10", "11", "12"],
      ["20", "21", "22"]
    ];
    console.log(matrica);
    console.log(matrica[0]); // ["00", "01", "02"]
    console.log(matrica[0][1]); // "01"
    console.log(matrica[2][1]); // "21"
  console.groupEnd();
  console.groupCollapsed("objektas objekte");
    let objektasObjekte = {
      vardas: "Rokas",
      pavarde: "Banaitis",
      ugis: 186,
      issimiegojes: false,
      gyvenamojiVieta: {
        miestas: "Kaunas",
        planeta: "Žemė",
        zemynas: "Europa",
        salis: "Lietuva",
        gatve: "Karaliaus Mindaugo pr.",
        namoNumeris: 32,
        butoNumeris: 654,
        laiptinesKodas: 6541
      }
    };
    console.log(objektasObjekte); // objektas
    console.log(objektasObjekte.gyvenamojiVieta); // objektas
    console.log(objektasObjekte.gyvenamojiVieta.zemynas); // "Europa"
    console.log(objektasObjekte.gyvenamojiVieta.salis); // "Lietuva"
  console.groupEnd();
  console.groupCollapsed("masyvas objekte");
    let masinos = {
      priekiuVaromos: ["Audi"],
      galuVaromos: ["BMW"],
      visomisVaromos: ["Rover", "Teslos"]
    };
    let masina = {
      marke: "Audi",
      metai: 2000,
      spalva: "ruda",
      bonusai: ["odinės sėdynės", "integruota multimedija", 'šildomos sėdynės']
    };
    console.log(masina);
    console.log(masina.bonusai); //["odinės sėdynės", "integruota multimedija", 'šildomos sėdynės']
    console.log(masina.bonusai[1]); // "integruota multimedija"
  console.groupEnd();
  console.group("objektas masyve");
    let objektaiMasyve = [
      {
        vardas: "Rokas",
        pavarde: "Banaitis",
        amzius: 27,
        issimiegojes: false,
        plaukuSpalva: 'ruda'
      }, {
        vardas: "Petras",
        pavarde: "Petraitis",
        amzius: 55,
        issimiegojes: false,
        plaukuSpalva: 'juoda'
      }, {
        vardas: "Jonas",
        pavarde: "Jonaitis",
        amzius: 10,
        issimiegojes: true,
        plaukuSpalva: undefined
      }
    ];
    console.log(objektaiMasyve);
    console.log(objektaiMasyve[1]); // Petro objektas
    console.log(objektaiMasyve[1].amzius); // 55
    console.log(objektaiMasyve[0].vardas + " yra " + objektaiMasyve[0].amzius + " metų amžiaus."); // "Petras yra 55 metų amžiaus."
    // console.log(objektaiMasyve[1].vardas + " yra " + objektaiMasyve[1].amzius + " metų amžiaus.");
    // console.log(objektaiMasyve[2].vardas + " yra " + objektaiMasyve[2].amzius + " metų amžiaus.");
  console.groupEnd();
console.groupEnd();