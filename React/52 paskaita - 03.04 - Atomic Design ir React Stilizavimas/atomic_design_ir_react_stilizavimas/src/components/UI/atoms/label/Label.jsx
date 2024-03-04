import koksNori from "./label.module.css";

const Label = ({text, inputName}) => {
  const stilius = {
    fontSize: "36px"
  };
  return (
    <label
      className={koksNori.colorRed}
      htmlFor={inputName}
      style={stilius}
    >{text}</label>
  );
}

export default Label;