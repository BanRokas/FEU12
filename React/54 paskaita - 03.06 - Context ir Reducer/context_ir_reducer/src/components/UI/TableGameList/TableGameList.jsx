import styled from "styled-components";
import TableGameCard from "../TableGameCard/TableGameCard";

const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

const TableGameList = ({tableGames, deleteTableGame}) => {
  return (
    <StyledDivContainer>
      {
        tableGames.length ?
        tableGames.map(game => 
          <TableGameCard
            key={game.id}
            game={game}
            deleteTableGame={deleteTableGame}
          />
        ) :
        <img
          src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif"
          alt="loading gif"
        />
      }
    </StyledDivContainer>
  );
}
 
export default TableGameList;