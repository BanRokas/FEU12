import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";

const Header = () => {

  const { loggedInUser, logout } = useContext(UsersContext);

  return (
    <header>
      <div>logo</div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Cards</li>
        </ul>
      </nav>
      {
        loggedInUser ?
        <>
          <span>{loggedInUser.username}</span>
          <button
            onClick={logout}
          >logOut</button>
        </> :
        <>
          <nav>
            <ul>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </nav>
        </>
      }
    </header>
  );
}
 
export default Header;