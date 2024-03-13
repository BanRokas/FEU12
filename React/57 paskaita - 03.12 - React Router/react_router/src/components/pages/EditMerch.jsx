import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import MerchandiseFormInputsContext from "../../contexts/MerchandiseFormInputsContext";
import MerchandiseContext from "../../contexts/MerchandiseContext";

const EditMerch = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { formInputs, onChangeF, resetForm, setFormInputs } = useContext(MerchandiseFormInputsContext);
  const { editMerch } = useContext(MerchandiseContext);

  useEffect(() => {
    fetch(`http://localhost:8080/merchandise/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormInputs({
          id: id,
          name: data.name,
          price: data.price
        })
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSubmit = e => {
    e.preventDefault();
    const editedMerch = {
      id: id,
      name: formInputs.name,
      price: formInputs.price
    };
    editMerch(editedMerch);
    setTimeout(() => {
      resetForm();
      navigate(-1);
    }, 10);
  }

  return (
    <section>
      <h1>Edit {id} Merchandise</h1>
      <form onSubmit={formSubmit}>
        <input 
          type="text"
          name="name"
          id="name"
          value={formInputs.name}
          onChange={onChangeF}
          placeholder="Enter merch name..."
        /><br/>
        <input 
          type="number"
          name="price"
          id="price"
          min={0.01}
          step={0.01}
          value={formInputs.price}
          onChange={onChangeF}
          placeholder="Enter merch price..."
        /><br/>
        <input
          type="submit"
          value="Edit Merch"
        />
      </form>
    </section>
  );
}
 
export default EditMerch;