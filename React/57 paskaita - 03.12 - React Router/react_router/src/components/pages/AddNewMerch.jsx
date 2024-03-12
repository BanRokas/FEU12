import { useContext } from "react";
import { v4 as uuid } from 'uuid';
import { useNavigate } from "react-router-dom";
import MerchandiseContext from "../../contexts/MerchandiseContext";
import MerchandiseFormInputsContext from "../../contexts/MerchandiseFormInputsContext";

const AddNewMerch = () => {

  const { addNewMerch } = useContext(MerchandiseContext);
  const { formInputs, onChangeF, resetForm } = useContext(MerchandiseFormInputsContext);
  const navigate = useNavigate();

  const formSubmit = e => {
    e.preventDefault();
    const newMerch = {
      id: uuid(),
      name: formInputs.name,
      price: formInputs.price
    };
    addNewMerch(newMerch);
    resetForm();
    navigate("/merchandise");
  };

  return (
    <section>
      <h1>Add New Merch</h1>
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
          value="Add New Merch"
        />
      </form>
    </section>
  );
}
 
export default AddNewMerch;