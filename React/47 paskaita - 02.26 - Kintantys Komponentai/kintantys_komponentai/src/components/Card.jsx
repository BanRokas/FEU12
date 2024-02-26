const Card = ({ info:{ pavadinimas, nuotrauka, lokacija, aprasymas } }) => {
  console.log(pavadinimas, nuotrauka, lokacija, aprasymas);
  return (
    <div>
      <img src={nuotrauka.url} alt={nuotrauka.alt} />
      <div>
        <h1>{pavadinimas}</h1>
        <p>{aprasymas}</p>
      </div>
      <iframe src={lokacija} frameborder="0"></iframe>
    </div>
  );
}
 
export default Card;