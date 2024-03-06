import { v4 as uuid } from 'uuid';

const AddNewTableGamePage = ({formInputs, setFormInputs, setPageLoader, addNewTableGame}) => {

  const onChangeF = e => {
    setFormInputs({
      ...formInputs,
      [e.target.name]:e.target.value
    });
  }

  const formSubmit = e => {
    e.preventDefault();
    const newTableGame = {
      id: uuid(),
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai:{
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo)
      },
      aprasymas: formInputs.aprasymas
    }
    addNewTableGame(newTableGame);
    setPageLoader('cards');
    setFormInputs({
      pavadinimas:"",
      nuotrauka:"",
      kiekisNuo:"",
      kiekisIki:"",
      amziusNuo:"",
      aprasymas:""
    });
  }

  return (
    <section>
      <h1>Add New Table Game</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Enter table game name..."
          value={formInputs.pavadinimas}
          onChange={onChangeF}
        /><br />
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Add table game photo url..."
          value={formInputs.nuotrauka}
          onChange={onChangeF}
        /><br />
        <input
          type="number"
          name="kiekisNuo"
          id="kiekisNuo"
          placeholder="Enter minimum player amount..."
          value={formInputs.kiekisNuo}
          onChange={onChangeF}
        /><br />
        <input
          type="number"
          name="kiekisIki"
          id="kiekisIki"
          placeholder="Enter maximum player amount..."
          value={formInputs.kiekisIki}
          onChange={onChangeF}
        /><br />
        <input
          type="number"
          name="amziusNuo"
          id="amziusNuo"
          placeholder="Enter minimum player age.."
          value={formInputs.amziusNuo}
          onChange={onChangeF}
        /><br />
        <textarea
          type="text"
          name="aprasymas"
          id="aprasymas"
          placeholder="Write down short table game description..."
          cols={50}
          rows={7}
          value={formInputs.aprasymas}
          onChange={onChangeF}
        /><br />
        <input
          type="submit"
          value="Add New Table Game"
        />
      </form>
    </section>
  );
}
 
export default AddNewTableGamePage;