const Header = ({setPageLoader}) => {
  return (
    <header>
      <button
        onClick={()=>setPageLoader("cards")}
      >Cards</button>
      <button
        onClick={()=>setPageLoader("addForm")}
      >Add Form</button>
    </header>
  );
}
 
export default Header;