import ListItem from "./ListItem";

const Patiekalas = ({ dish, statusChange, deleteDish }) => {
  return (
    <div
      className={`dishCard ${dish.ragautas ? 'green' : 'red'}`}
      // style={{ backgroundColor: `${dish.ragautas? 'green' : 'red'}`}}
    >
      <h3>{dish.pavadinimas}</h3>
      <img
        src={dish.nuotrauka}
        alt={dish.pavadinimas}
      />
      <div>
        <p>Kilmės šalis: {dish.kilmesSalis}</p>
        <p>Ingredientai:</p>
        <ul>
          {
            dish.ingredientai.map((ingredientas, i) =>
              <ListItem
                key={i}
                text={ingredientas}
              />
            )
          }
        </ul>
        <p>Kainos ribos: {dish.kaina.nuo} - {dish.kaina.iki}&euro;</p>
        <label htmlFor={`ragautas${dish.id}`}>Esu ragavęs šį patiekalą: </label>
        <input
          type="checkbox"
          id={`ragautas${dish.id}`}
          checked={dish.ragautas}
          onChange={() => statusChange(dish.id)}
        />
      </div>
      <button
        onClick={() => deleteDish(dish.id)}
      >Trinti</button>
    </div>
  );
}

export default Patiekalas;