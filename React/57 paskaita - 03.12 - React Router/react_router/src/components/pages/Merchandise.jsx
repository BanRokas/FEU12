import styled from 'styled-components';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MerchandiseContext from '../../contexts/MerchandiseContext';
import OneMerchandise from '../UI/OneMerchandise';

const StyledMerchandise = styled.section`
  padding: 30px 50px;
  box-sizing: border-box;
  min-height: calc(100vh - 200px);
  border: 3px solid black;

  background-color: #e3e3fa81;
  background-blend-mode: overlay;
  background-image: url('https://previews.123rf.com/images/foottoo/foottoo1302/foottoo130200186/17743565-footpath-at-a-forest-nice-background.jpg');
  background-size: cover;
  background-position: center;

  > h1 {
    font-size: 2.5rem;
    text-align: center;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-evenly;
  }
`;

const Merchandise = () => {

  const { merch } = useContext(MerchandiseContext);
  const navigate = useNavigate();

  return (
    <StyledMerchandise>
      <button
        onClick={()=>{navigate('/addNewMerchandise')}}
      >Add New Merch</button>
      <h1>Our Merch</h1>
      <div>
        {
          merch.map(el => {
            return <OneMerchandise 
              key={el.id}
              data={el}
            />
          })
        }
      </div>
    </StyledMerchandise>
  );
}
 
export default Merchandise;