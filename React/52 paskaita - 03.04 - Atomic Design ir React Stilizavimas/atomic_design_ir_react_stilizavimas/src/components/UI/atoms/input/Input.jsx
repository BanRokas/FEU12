const Input = ({type, name, id, placeholder, valueState, onChangeF}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={valueState}
      onChange={onChangeF}
    />
  );
}
 
export default Input;