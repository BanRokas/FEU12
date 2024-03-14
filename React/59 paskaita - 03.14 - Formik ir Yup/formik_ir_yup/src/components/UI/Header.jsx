import { NavLink } from "react-router-dom";
import styled from 'styled-components';

const StyledHeader = styled.header`
  padding: 5px;
  display: flex;
  justify-content: space-between;

  > div > a > img{
    width: 50px;
    height: auto;
  }

  > nav{
    > ul{
      display: flex;
      gap: 10px;
      list-style-type: none;
      > li{
        > a{
          color: black;
          font-weight: bold;
          font-size: 1.5rem;
          text-decoration: none;
        }
        > a.active{
          color: orange;
        }
        > a:hover{
          color: green;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <NavLink to="/">
          <img src="https://img.stackshare.io/service/8846/preview.png" alt="formik logo" />
        </NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/"
              // className={({ isActive })=> isActive && 'active'}
            >Home</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
 
export default Header;