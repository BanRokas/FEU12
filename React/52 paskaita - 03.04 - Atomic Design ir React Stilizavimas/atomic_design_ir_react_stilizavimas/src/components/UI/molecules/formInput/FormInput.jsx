import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";

const FormInput = ({nameId, labelText, inputType, placeholderText, value, onChangeF}) => {
  return (
    <div>
      <Label
        text={labelText}
        inputName={nameId}
      />
      <Input
        type={inputType}
        name={nameId}
        id={nameId}
        placeholder={placeholderText}
        valueState={value}
        onChangeF={onChangeF}
      />
    </div>
  );
}
 
export default FormInput;