import './App.css';
import Headings from './components/Headings';
import Korteles from './components/Korteles';

const App = () => {

  const data = ['Labas rytas', 'Pietų metas','Geros dienos','Labanaktis'];
  const lankytinos_LT_vietos = [
    {
      id: 0,
      pavadinimas: "Dieveniškių istorinis regioninis parkas",
      nuotrauka: {
        url: "https://cdn2.onlithuania.com/content/uploads/2021/04/Norviliskiu-pilis-is-oro-scaled.jpg",
        alt: "pilis"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125377.17867113839!2d25.591449833236315!3d54.27426235946243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dc2b641cb6b425%3A0xcc7c46ce69a0d4ac!2sDieveni%C5%A1ki%C5%B3%20istorinis%20regioninis%20parkas!5e0!3m2!1sen!2slt!4v1708935547308!5m2!1sen!2slt",
      aprasymas: "Dieveniškių istorinis regioninis parkas – regioninis parkas pietryčių Lietuvoje. Plotas 8598 ha, direkcija Poškonyse. Parkas įsteigtas kultūros ir gamtos požiūriu vertingiems Dieveniškių apylinkių kraštovaizdžio ir etnokultūriniams kompleksams išsaugoti ir tvarkyti."
    },{
      id: 1,
      pavadinimas: "Nemuno kilpų regioninis parkas",
      nuotrauka: {
        url: "https://photos.trip.lt/da15757f-7ad2-488d-a61d-27a8af98acd0/3840x2160?crop=true",
        alt: "Nemuno kilpos"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22626.936873870003!2d24.011798102881965!3d54.61004582237273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1708935994193!5m2!1sen!2slt",
      aprasymas: "Nemuno kilpų regioninis parkas – regioninis parkas pietinėje Lietuvoje, direkcija Birštone. Plotas 25171 ha (miškai užima 67 proc.). Įsteigtas siekiant išsaugoti unikalų didžiųjų Nemuno kilpų ir Punios šilo kraštovaizdžiui, jo gamtinei ekosistemai bei kultūros paveldo vertybėms."
    },{
      id: 2,
      pavadinimas: "Kernavė",
      nuotrauka: {
        url: "https://www.vle.lt/uploads/_CGSmartImage/126249_1-a9326fd53033d23ee7e3c24a61b1b111.jpg",
        alt: "Kernavės piliakalniai"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18359.759552899763!2d24.847342645458728!3d54.885896205370656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e7634a854114d7%3A0xa00d18ec9baac30!2sKernav%C4%97%2C%2019172%20%C5%A0irvintos%20District%20Municipality!5e0!3m2!1sen!2slt!4v1708936279378!5m2!1sen!2slt",
      aprasymas: "Kernavė – miestelis Širvintų rajono savivaldybėje, Neries dešiniajame krante, 18 km į pietvakarius nuo Širvintų, 35 km į šiaurės vakarus nuo Vilniaus. Seniūnijos centras, 2 seniūnaitijos (Kerniaus ir Piliakalnio). Miestelis garsus Kernavės piliakalniais, kuriems XIX a. sugalvoti vardai – Pilies kalnas, Aukuro kalnas, Mindaugo kalnas (arba Mindaugo sosto piliakalnis), Lizdeikos kalnas ir Kriveikiškio piliakalnis."
    },{
      id: 3,
      pavadinimas: "Plokštinės raketų bazė",
      nuotrauka: {
        url: "https://www.visitplunge.lt/data/tourism_objects/large/dji_0282.jpg",
        alt: "raketų bazė"
      },
      lokacija: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.252317942305!2d21.904454845027367!3d56.031541442623585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e50d5b6f59afab%3A0x4cad8f9cb50d6e90!2sCold%20War%20Museum!5e1!3m2!1sen!2slt!4v1708936509966!5m2!1sen!2slt",
      aprasymas: "Plokštinės požeminė balistinių raketų su termobranduoliniais užtaisais bazė – TSRS ginkluotųjų pajėgų raketų bazė, pastatyta Plokštinės miške netoli Platelių ežero, 13 km šiauriau Plungės, aukščiausioje miškais apaugusioje, mažai apgyvendintoje regiono vietovėje į šiaurės rytus nuo Plokščių kaimo. Tai pirmoji kovinė Tarybų Sąjungos požeminė R-12 Dvina balistinių vidutinio nuotolio raketų bazė. Joje bazavosi vienas 79-ojo raketų pulko divizionas."
    }
  ];

  return (
    <>
      {/* <Headings
        stuff={data}
      /> */}
      <Korteles 
        data={lankytinos_LT_vietos}
      />
    </>
  );
}

export default App;