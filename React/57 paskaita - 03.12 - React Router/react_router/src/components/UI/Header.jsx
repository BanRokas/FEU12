import { useContext } from "react";
import UsersContext from "../../contexts/UsersContext";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const { loggedInUser, logout } = useContext(UsersContext);
  const navigate = useNavigate();

  return (
    <header>
      <div>logo</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to='/cards'>Cards</Link></li>
        </ul>
      </nav>
      {
        loggedInUser ?
        <>
          <span>{loggedInUser.username}</span>
          <button
            onClick={() => {
              logout();
              navigate('/');
            }}
          >logOut</button>
        </> :
        <>
          <nav>
            <ul>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/register'>Register</Link></li>
            </ul>
          </nav>
        </>
      }
    </header>
  );
}
 
export default Header;