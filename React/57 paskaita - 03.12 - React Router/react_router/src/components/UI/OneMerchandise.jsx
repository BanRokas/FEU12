import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledOneMerchandise = styled.div`
  box-sizing: border-box;
  border: 2px double orange;
  text-align: center;
  background-color: #f0f8ff65;

  width: 250px;
  height: 200px;
`;

const OneMerchandise = ({ data }) => {
  return (
    <StyledOneMerchandise>
      <h1>{data.name}</h1>
      <p>{data.price}&euro;</p>
      <button>
        <Link to={`/merchandise/${data.id}`}>More info</Link>
      </button>
    </StyledOneMerchandise>
  );
}
 
export default OneMerchandise;