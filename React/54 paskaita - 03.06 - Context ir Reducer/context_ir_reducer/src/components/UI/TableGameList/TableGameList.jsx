import styled from "styled-components";
import TableGameCard from "../TableGameCard/TableGameCard";
import { useContext } from "react";
import TableGamesContext from "../../../contexts/TableGamesContext";

const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

const TableGameList = () => {

  const { tableGames } = useContext(TableGamesContext);

  return (
    <StyledDivContainer>
      {
        tableGames.length ?
        tableGames.map(game => 
          <TableGameCard
            key={game.id}
            game={game}
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