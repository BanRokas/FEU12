const Header = ({ logIn, isLoggedIn, logOut }) => {
  return (
    <header>
      {
        isLoggedIn ? 
        <button onClick={logOut}>Sign Out</button> :        
        <>
          <button>Sign Up</button>
          <button onClick={logIn}>Sign In</button>
        </>
      }
    </header>
  );
}
 
export default Header;