import FormInput from "../../molecules/formInput/FormInput";
import Input from "../../atoms/input/Input";

const RegisterForm = ({value, onChangeF}) => {
  return (
    <form>
    {/* 
      text vardas
      email email
      url profilio_foto
      password slaptažodis
      password slaptažodžioPakartojimas
      submit Registruotis
    */}
      <FormInput 
        nameId="vardas"
        labelText="Vardas: "
        inputType="text"
        placeholderText="Vardenis..."
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="email"
        labelText="Elektroninis paštas: "
        inputType="email"
        placeholderText="vardPav@gmail.com"
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="avatar"
        labelText="Profilio nuotrauka: "
        inputType="url"
        placeholderText="https://www._____.png"
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="password"
        labelText="Slaptažodis: "
        inputType="password"
        placeholderText="Slaptas123..."
        value={value}
        onChangeF={onChangeF}
      />
      <FormInput 
        nameId="passwordRepeat"
        labelText="Slaptažodio pakartojimas: "
        inputType="password"
        placeholderText="Slaptas123..."
        value={value}
        onChangeF={onChangeF}
      />
      <Input
        type="submit"
        valueState="Registruotis"
      />
    </form>
  );
}
 
export default RegisterForm;