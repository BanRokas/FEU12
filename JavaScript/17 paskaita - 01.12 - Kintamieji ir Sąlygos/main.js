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

console.groupCollapsed("Nest'inti masyvai ir objektai");
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
  console.groupCollapsed("objektas masyve");
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

/*              Sąlygos
    switch - soon; ternary ir Logic AND - not soon
    if if_else if_elseIf if_elseIf_else - šiandien

    Jeigu sąlyga yra tenkinama - vykdomas kodas jos viduje

    Loginiai Operatoriai
      !  - NOT - apverčia reikšmę
      && - AND - ar bent vienoje pusėje yra melas, tokiu atveju grąžinama false
      || - OR  - ar bent vienoje pusėje yra tiesa, tokiu atveju grąžinama true

    Truthy   |   Falsy
    _________|__________
    true     | false
    non zero | 0
    "string" | ""
    object   | undefined
    array    | null
    function | NaN

    Sąlygos
      if
        if(salyga) { veiksmai }
          Jeigu sąlyga yra tiesa - vykdomi veiksmai; melas - niekas nevyksta (kodas važiuoja toliau)
      if else
        if(salyga) { veiksmai0 } else { veiksmai1 }
          Jeigu sąlyga yra tiesa - vykdomi veiksmai0; melas - vykdomi veiksmai1
      if else_if
        if(salyga0) { veiksmai0 } else if(salyga1) { veiksmai1 }
          Jeigu sąlyga0 yra tiesa - vykdomi veiksmai0 ir toliau einančių sąlygų netikrina ir nevykdo jų veiksmų
          Jeigu sąlyga0 yra melas - tikrinama sąlyga1; Jeigu sąlyga1 yra tiesa - vykdomi veiksmai1
          Jeigu sąlyga0 yra melas - tikrinama sąlyga1; Jeigu sąlyga1 yra melas - niekas nevyksta (kodas važiuoja toliau)
      if else_if else
        if(sąlyga0) { veiksmai0 } else if(sąlyga1) { veiksmai1 } else { veiksmai2 }
          Jeigu sąlyga0 yra tiesa - vykdomi veiksmai0 ir toliau einančių sąlygų netikrina ir nevykdo jų veiksmų
          Jeigu sąlyga0 yra melas - tikrinama sąlyga1; Jeigu sąlyga1 yra tiesa - vykdomi veiksmai1 ir toliau einančių sąlygų netikrina ir nevykdo jų veiksmų
          Jeigu sąlyga0 yra melas - tikrinama sąlyga1; Jeigu sąlyga1 yra melas - vykdomi else'o veiksmai2

      Jeigu sąlyga yra tenkinama - vykdomas jos kodas.
      Sąlygos viduje yra vykdoma vienintelė veiksmų grupė.
      Else if'ų gali būti kiek nori.
      Jeigu nei viena sąlyga nėra tiesa - vykdomas else'as.
*/

// let amzius = 30;
// if(amzius >= 18){
//   console.log("Asmuo yra pilnametis.");
// } else {
//   console.log("Asmuo nėra pilnametis.");
// }

// let amzius = 50;
// if(amzius < 18){
//   console.log("Asmuo nėra pilnametis.");
// } else if(amzius >= 65){
//   console.log("Asmuo yra pensininkas.");
// } else if(amzius < 30){
//   console.log("Asmuo yra pilnametis, bet nesuaugęs.");
// } else {
//   console.log("Asmuo yra pilnametis ir suaugęs.");
// }

//        Sąlygos su loginiais operatoriais

// let amzius = 50;
// if(amzius < 18){
//   console.log("Asmuo nėra pilnametis.");
// } else if(amzius >= 65){
//   console.log("Asmuo yra pensininkas.");
// } else if(amzius >= 18 && amzius < 30){
//   console.log("Asmuo yra pilnametis, bet nesuaugęs.");
// } else {
//   console.log("Asmuo yra pilnametis ir suaugęs.");
// }


//        Nest'intos sąlygos

let amzius = 35;
if(!(typeof(amzius) === "number")){
  console.log("error, reikia skaičiaus...");
} else if(amzius >= 18){
  console.log("Asmuo yra pilnametis.");
  if(amzius < 30){
    console.log("Dar jaunas.");
  } else if(amzius >= 30 && amzius < 65){
    console.log("Laukia pensijos...");
  } else {
    console.log("Sulaukė pensijos.");
  }
} else {
  console.log("Asmuo nėra pilnametis.");
}

/*
  5 Extra) Padaryti taip, kad puslapis su tavimi pasisveikintu naudodamas teisingą galunę (ir tiktų ne tik tavo vardui, o visiem).
    Naudoti: 
      1) let - kurti kintamuosius
      2) prompt - gauti tavo vardą
      3) endsWith | slice | concat - google šiuos string metodus, kad tikrintum ir koreguotum vardą
      4) alert/console.log - grąžinti teisingą pasisveikinimą.
      5) if/elseIf/else - kas be ko...
*/
// Rok as - Rok ai; Nerij us - Nerij au; Nagl is - Nagl i; Stas ys - Stas į; Egl ė - Egl e; Mild a - Mild a;
let vardas = "Aistis";
if(vardas.endsWith('as')){
  let pradzia = vardas.slice(0, vardas.length-1);
  let vardoKreipimasis = pradzia.concat('i');
  console.log(vardoKreipimasis);
} else if(vardas.endsWith('us')){
  let pradzia = vardas.slice(0, vardas.length-2);
  let vardoKreipimasis = pradzia.concat('au');
  console.log(vardoKreipimasis);
} else if(vardas.endsWith('is')){
  let pradzia = vardas.slice(0, vardas.length-1);
  let vardoKreipimasis = pradzia.concat('');
  console.log(vardoKreipimasis);
} else if(vardas.endsWith('ys')){
  let pradzia = vardas.slice(0, vardas.length-2);
  let vardoKreipimasis = pradzia.concat('į');
  console.log(vardoKreipimasis);
} else if(vardas.endsWith('ė')){
  let pradzia = vardas.slice(0, vardas.length-1);
  let vardoKreipimasis = pradzia.concat('e');
  console.log(vardoKreipimasis);
} else if(vardas.endsWith('a')){
  let pradzia = vardas.slice(0, vardas.length-0);
  let vardoKreipimasis = pradzia.concat('');
  console.log(vardoKreipimasis);
} else {
  console.log(vardas);
}