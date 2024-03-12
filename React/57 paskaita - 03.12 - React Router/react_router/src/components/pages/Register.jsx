import { v4 as uuid } from 'uuid';
import { useContext, useState } from "react";
import UsersFormInputsContext from "../../contexts/UsersFormInputsContext";
import UsersContext from "../../contexts/UsersContext";

const Register = () => {

  const [diffPassError, setDiffPassError] = useState(false);
  const { formInputs, onChangeF, resetForm } = useContext(UsersFormInputsContext);
  const { addNewUser } = useContext(UsersContext);

  const formSubmit = e => {
    e.preventDefault();
    if(formInputs.password !== formInputs.passwordRepeat){
      setDiffPassError(true);
      return;
    }
    const newUser = {
      id: uuid(),
      username: formInputs.username,
      password: formInputs.password,
      email: formInputs.email
    };
    addNewUser(newUser);
    resetForm();
  }

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Create your username..."
          value={formInputs.username}
          onChange={onChangeF}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email adress..."
          value={formInputs.email}
          onChange={onChangeF}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create your password..."
          value={formInputs.password}
          onChange={onChangeF}
        />
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="Please repeat your password..."
          value={formInputs.passwordRepeat}
          onChange={onChangeF}
        />
        <input
          type="submit"
          value="Register"
        />
      </form>
      {
        diffPassError &&
        <p>Failed to Register<br />Passwords, don't match</p>
      }
    </section>
  );
}
 
export default Register;