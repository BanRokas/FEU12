import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  justify-items: center;
  grid-template-columns: 3fr 2fr;
  padding-top: 50px;

  > h1{
    grid-area: 1 / 1 / 2 / -1;
    font-size: 3rem;
  }
  > p{
    font-size: 2rem;
    width: 20ch;
    justify-self: start;
  }
`;

const Home = () => {
  return (
    <StyledSection>
      <h1>Home</h1>
      <img
        src="https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png"
        alt="company cat"
      />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum tenetur fugiat ab, molestias rerum veritatis. Sapiente blanditiis perspiciatis similique?
      </p>
    </StyledSection>
  );
}
 
export default Home;