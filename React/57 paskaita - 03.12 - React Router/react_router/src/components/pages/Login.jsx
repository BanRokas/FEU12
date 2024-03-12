import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersFormInputsContext from "../../contexts/UsersFormInputsContext";
import UsersContext from "../../contexts/UsersContext";

const Login = () => {

  const navigate = useNavigate();

  const [failedToLogin, setFailedToLogin] = useState(false);
  const { formInputs, onChangeF, resetForm } = useContext(UsersFormInputsContext);
  const { users, login } = useContext(UsersContext);

  const formSubmit = e => {
    e.preventDefault();
    const user = users.find(user => user.username === formInputs.username);
    if(!user){
      setFailedToLogin(true);
      return;
    } else if(user.password === formInputs.password){
      login(user);
      resetForm();
      navigate('/');
    } else {
      setFailedToLogin(true);
      return;
    };
  };

  return (
    <section>
      <h1>Login</h1>
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
          type="password"
          name="password"
          id="password"
          placeholder="Create your password..."
          value={formInputs.password}
          onChange={onChangeF}
        />
        <input
          type="submit"
          value="Login"
        />
      </form>
      {
        failedToLogin && 
        <p>Username or password incorrect</p>
      }
    </section>
  );
}
 
export default Login;