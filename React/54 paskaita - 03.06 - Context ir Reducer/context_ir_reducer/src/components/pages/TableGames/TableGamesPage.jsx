import TableGameList from "../../UI/TableGameList/TableGameList";

const TableGamesPage = ({tableGames, deleteTableGame}) => {
  return (
    <section>
      <h1>Our Table Games</h1>
      <TableGameList
        tableGames={tableGames}
        deleteTableGame={deleteTableGame}
      />
    </section>
  );
}
 
export default TableGamesPage;