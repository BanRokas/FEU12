const AddNewTableGamePage = () => {
  return (
    <section>
      <h1>Add New Table Game</h1>
      <form>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Enter table game name..."
          value=""
          onChange={()=>{}}
        /><br />
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Add table game photo url..."
          value=""
          onChange={()=>{}}
        /><br />
        <input
          type="number"
          name="kiekisNuo"
          id="kiekisNuo"
          placeholder="Enter minimum player amount..."
          value=""
          onChange={()=>{}}
        /><br />
        <input
          type="number"
          name="kiekisIki"
          id="kiekisIki"
          placeholder="Enter maximum player amount..."
          value=""
          onChange={()=>{}}
        /><br />
        <input
          type="number"
          name="amziusNuo"
          id="amziusNuo"
          placeholder="Enter minimum player age.."
          value=""
          onChange={()=>{}}
        /><br />
        <textarea
          type="text"
          name="aprasymas"
          id="aprasymas"
          placeholder="Write down short table game description..."
          cols={50}
          rows={7}
          value=""
          onChange={()=>{}}
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