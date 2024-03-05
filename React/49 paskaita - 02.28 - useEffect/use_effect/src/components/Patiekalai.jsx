import Patiekalas from "./Patiekalas";

const Patiekalai = ({ dishes, statusChange, deleteDish, setArRedaguojame, setFormInputs }) => {
  return (
    <section id="ourDishes">
      <h1>Mūsų patiekalai</h1>
      <div className="dishesContainer">
        {
          dishes.map(dish =>
            <Patiekalas
              key={dish.id}
              dish={dish}
              statusChange={statusChange}
              deleteDish={deleteDish}
              setArRedaguojame={setArRedaguojame}
              setFormInputs={setFormInputs}
            />
          )
        }
      </div>
    </section>
  );
}
 
export default Patiekalai;