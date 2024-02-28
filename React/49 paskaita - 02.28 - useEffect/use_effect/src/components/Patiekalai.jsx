import Patiekalas from "./Patiekalas";

const Patiekalai = ({ dishes }) => {
  return (
    <section id="ourDishes">
      <h1>Mūsų patiekalai</h1>
      <div className="dishesContainer">
        {
          dishes.map(dish =>
            <Patiekalas
              key={dish.id}
              dish={dish}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default Patiekalai;