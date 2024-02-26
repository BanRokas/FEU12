import Image from "./Image";
import Heading from './Heading';
import Paragraph from "./Paragraph";
import I_Frame from "./I_Frame";

const Card = ({ info:{ pavadinimas, nuotrauka, lokacija, aprasymas } }) => {
  // console.log(pavadinimas, nuotrauka, lokacija, aprasymas);
  return (
    <div className="card">
      <div>
        {/* <h1>{pavadinimas}</h1> */}
        <Heading 
          text={pavadinimas}
        />
        {/* <img src={nuotrauka.url} alt={nuotrauka.alt} /> */}
        <Image 
          src={nuotrauka.url}
          alt={nuotrauka.alt}
        />
        {/* <p>{aprasymas}</p> */}
        <Paragraph
          text={aprasymas}
        />
      </div>
      {/* <iframe src={lokacija} title={pavadinimas}></iframe> */}
      <I_Frame 
        src={lokacija}
        title={pavadinimas}
      />
    </div>
  );
}
 
export default Card;