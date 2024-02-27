const Skaiciuoti = ({ number, increment, decrement }) => {
  return (
    <section>
      <p>Mūsų skaičius yra: {number}</p>
      <button onClick={decrement}>Mažinti Skaičių</button>
      <button onClick={() => increment()}>Didinti Skaičių</button>
    </section>
  );
}
 
export default Skaiciuoti;