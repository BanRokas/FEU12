import { useContext } from 'react';
import TableGamesContext from '../../../contexts/TableGamesContext';
import FormInputsContext from '../../../contexts/FormInputsContext';
import PageLoaderContext from '../../../contexts/PageLoaderContext';
import { actionTypes } from '../../../contexts/TableGamesContext';

const EditTableGamePage = () => {

  const { setTableGames } = useContext(TableGamesContext);
  const { onChangeF, formInputs, resetFormInputs } = useContext(FormInputsContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  const formSubmit = e => {
    e.preventDefault();
    const editedTableGame = {
      id: formInputs.id,
      pavadinimas: formInputs.pavadinimas,
      nuotrauka: formInputs.nuotrauka,
      zaidejai:{
        kiekisNuo: Number(formInputs.kiekisNuo),
        kiekisIki: Number(formInputs.kiekisIki),
        amziusNuo: Number(formInputs.amziusNuo)
      },
      pazymetas: formInputs.pazymetas,
      aprasymas: formInputs.aprasymas
    };
    setTableGames({
      type: actionTypes.editFull,
      changedTableGame: editedTableGame
    });
    setPageLoader('cards');
    resetFormInputs();
  }

  return (
    <section>
      <h1>Edit Table Game</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Enter table game name..."
          value={formInputs.pavadinimas}
          onChange={onChangeF}
        /><br />
        <label
          htmlFor="pazymetas"
        >I have played this game - </label>
        <input
          type="checkbox"
          name="pazymetas"
          id="pazymetas"
          checked={formInputs.pazymetas}
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
          value="Edit Table Game"
        />
      </form>
      <button
        onClick={()=>{
          resetFormInputs();
          setPageLoader("cards");
        }}
      >Cancel Edit</button>
    </section>
  );
}
 
export default EditTableGamePage;