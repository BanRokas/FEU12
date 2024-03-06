import styled from 'styled-components';

const StyledCardDiv = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  padding: 5px 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;

  > img{
    width: auto;
    height: 200px;
  }
`;

const TableGameCard = ({game}) => {
  return (
    <StyledCardDiv>
      <h3>{game.pavadinimas}</h3>
      <img 
        src={game.nuotrauka}
        alt={`${game.pavadinimas} game box`}
      />
      <div>
        <p>
          {game.zaidejai.kiekisNuo}-{game.zaidejai.kiekisIki} Players
        </p>
        <p>Age: {game.zaidejai.amziusNuo}+</p>
      </div>
      <p>{game.aprasymas}</p>
    </StyledCardDiv>
  );
}
 
export default TableGameCard;