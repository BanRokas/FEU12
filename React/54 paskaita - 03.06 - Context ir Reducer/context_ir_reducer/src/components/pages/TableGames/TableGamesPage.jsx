import TableGameList from "../../UI/TableGameList/TableGameList";

const TableGamesPage = ({tableGames}) => {
  return (
    <section>
      <h1>Our Table Games</h1>
      <TableGameList
        tableGames={tableGames}
      />
    </section>
  );
}
 
export default TableGamesPage;