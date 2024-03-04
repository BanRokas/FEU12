import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: orange;
  color: black;
  font-size: 5px;
  letter-spacing: 10px;
`;

const Input = ({type, name, id, placeholder, valueState, onChangeF}) => {
  // console.log(valueState);
  return (
    <StyledInput
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={valueState[name]}
      onChange={(e) => onChangeF({
        ...valueState,
        [name]: e.target.value
      })}
    />
  );
}
 
export default Input;