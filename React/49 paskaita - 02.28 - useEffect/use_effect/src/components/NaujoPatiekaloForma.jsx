const NaujoPatiekaloForma = ({ formInputs, setFormInputs}) => {
  return (
    <section>
      <h1>Pridėti patiekalą</h1>
      <form>
        <input
          type="text"
          name="pavadinimas"
          id="pavadinimas"
          placeholder="Įveskite patiekalo pavadinimą..."
          value={formInputs.pavadinimas}
          onChange={e => setFormInputs({
            ...formInputs,
            pavadinimas: e.target.value
          })}
          // onBlur={()=>{}}
        /><br />
        {/* {
          !formInputs.pavadinimas.error.isOkay && 
          <span>{formInputs.pavadinimas.error.message}</span> 
        } */}
        <input
          type="url"
          name="nuotrauka"
          id="nuotrauka"
          placeholder="Įkelkite patiekalo nuotraukos url..."
          value={formInputs.nuotrauka}
          onChange={e => setFormInputs({
            ...formInputs,
            nuotrauka: e.target.value
          })}
        /><br />
        <input
          type="text"
          name="kilmesSalis"
          id="kilmesSalis"
          placeholder="Įveskite patiekalo kilmės šalį..."
          value={formInputs.kilmesSalis}
          onChange={e => setFormInputs({
            ...formInputs,
            kilmesSalis: e.target.value
          })}
        /><br />
        <label htmlFor="ragautas">Ar esi ragavęs šį patiekalą? </label>
        <input
          type="checkbox"
          name="ragautas"
          id="ragautas"
          checked={formInputs.ragautas}
          onChange={e => setFormInputs({
            ...formInputs,
            ragautas: e.target.checked
          })}
        /><br />
        <textarea
          name="ingredientai"
          id="ingredientai"
          placeholder="Išvardinkite ingredientus atskirdami juos kabliataškiu: morka; bulvė; miltai; ..."
          value={formInputs.ingredientai}
          onChange={e => setFormInputs({
            ...formInputs,
            ingredientai: e.target.value
          })}
        /><br />
        <input
          type="number"
          name="kainaNuo"
          id="kainaNuo"
          placeholder="Įveskite mažiausią galimą patiekalo kainą..."
          value={formInputs.kainaNuo}
          onChange={e => setFormInputs({
            ...formInputs,
            kainaNuo: e.target.value
          })}
        /><br />
        <input
          type="number"
          name="kainaIki"
          id="kainaIki"
          placeholder="Įveskite didžiausią galimą patiekalo kainą..."
          value={formInputs.kainaIki}
          onChange={e => setFormInputs({
            ...formInputs,
            kainaIki: e.target.value
          })}
        /><br />
        <input type="submit" value="Pridėti patiekalą" />
      </form>
    </section>
  );
}
 
export default NaujoPatiekaloForma;