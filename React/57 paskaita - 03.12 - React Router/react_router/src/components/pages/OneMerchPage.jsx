import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const StyledOneMerchandise = styled.div`
  box-sizing: border-box;
  border: 2px double orange;
  text-align: center;
  background-color: #f0f8ff65;

  width: 250px;
  height: 200px;
`;

const OneMerchPage = () => {

  const navigator = useNavigate();
  const { id } = useParams();
  const [merch, setMerch] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8080/merchandise/${id}`)
      .then(res => res.json())
      .then(data => setMerch(data))
      .catch(err => navigator('/errornonexistttttt'))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <StyledOneMerchandise>
        <h1>{merch.name}</h1>
        <p>{merch.price}&euro;</p>
        <p>More info and stuff...</p>
        <button>
          <Link to={`edit`}>Edit</Link>
        </button>
      </StyledOneMerchandise>
    </section>
  );
}
 
export default OneMerchPage;