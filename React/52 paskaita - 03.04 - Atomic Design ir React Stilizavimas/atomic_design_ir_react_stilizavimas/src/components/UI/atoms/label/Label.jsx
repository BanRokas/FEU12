const Label = ({text, inputName}) => {
  return (
    <label htmlFor={inputName}>{text}</label>
  );
}

export default Label;