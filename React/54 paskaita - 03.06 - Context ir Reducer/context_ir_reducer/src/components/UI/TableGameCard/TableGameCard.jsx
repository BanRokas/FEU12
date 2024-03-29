import styled from 'styled-components';
import { useContext } from 'react';
import TableGamesContext from '../../../contexts/TableGamesContext';
import FormInputsContext from '../../../contexts/FormInputsContext';
import PageLoaderContext from '../../../contexts/PageLoaderContext';
import { actionTypes } from '../../../contexts/TableGamesContext';

const StyledCardDiv = styled.div`
  background-color: ${props => props.$arPazymetas ? '#8fe68d' : '#E79292'};
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

const TableGameCard = ({ game }) => {

  const { setTableGames } = useContext(TableGamesContext);
  const { setFormInputsToCardInfo } = useContext(FormInputsContext);
  const { setPageLoader } = useContext(PageLoaderContext);

  return (
    <StyledCardDiv $arPazymetas={game.pazymetas}>
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
      <button
        onClick={() => setTableGames({
          type: actionTypes.delete,
          id: game.id
        })}
      >Delete</button>
      <button
        onClick={()=>{
          setFormInputsToCardInfo(game);
          setPageLoader("editForm");
        }}
      >Edit</button>
      <button
        onClick={() => setTableGames({
          type: actionTypes.editStatus,
          id: game.id
        })}
      >{game.pazymetas ? "nežaistas" : "žaistas"}</button>
    </StyledCardDiv>
  );
}
 
export default TableGameCard;