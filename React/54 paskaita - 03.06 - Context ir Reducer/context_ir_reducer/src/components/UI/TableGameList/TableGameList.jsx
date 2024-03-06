import styled from "styled-components";
import TableGameCard from "../TableGameCard/TableGameCard";

const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

const TableGameList = ({tableGames}) => {
  return (
    <StyledDivContainer>
      {
        tableGames.map(game => 
          <TableGameCard
            key={game.id}
            game={game}
          />
        )
      }
    </StyledDivContainer>
  );
}
 
export default TableGameList;