import Heading from "../../UI/atoms/heading/Heading";
import RegisterForm from "../../UI/organisms/registerForm/RegisterForm";

const RegisterFormPage = ({value, onChangeF}) => {
  return (
    <section>
      <Heading 
        text="Registracijos forma"
      />
      <RegisterForm 
        value={value}
        onChangeF={onChangeF}
      />
    </section>
  );
}
 
export default RegisterFormPage;