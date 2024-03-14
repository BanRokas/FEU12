import { useFormik } from 'formik';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1{
    font-size: 2.5rem;
  }
  > form{
    display: flex;
    flex-direction: column;
    gap: 10px;

    > div{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      > div{
        display: flex;
        justify-content: space-evenly;
      }
    }
    > input{
      width: 50%;
      align-self: center;
    }
  }
`;

const Register = () => {

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      passwordRepeat: "",
      avatarURL: "",
      age: "",
      gender: "",
      language: ""
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return (
    <StyledSection>
      <h1>Register</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName" id="userName"
            placeholder="Enter your user name..."
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email" id="email"
            placeholder="Enter your email..."
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="avatarURL">Profile Picture:</label>
          <input
            type="url"
            name="avatarURL" id="avatarURL"
            placeholder="Enter profile picture url..."
            value={formik.values.avatarURL}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age" id="age"
            placeholder="Enter your age..."
            value={formik.values.age}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label>Pick Your Gender:</label>
          <div>
            <div>
              <label htmlFor="woman">Woman:</label>
              <input
                type="radio"
                name="gender" id="woman"
                value="woman"
                onChange={formik.handleChange}
              />
            </div>
            <div>
              <label htmlFor="man">Man:</label>
              <input
                type="radio"
                name="gender" id="man"
                value="man"
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="language">Select Your Native Language:</label>
          <select name="language" id="language"
            value={formik.values.language}
            onChange={formik.handleChange}
          >
            <option value="" disabled></option>
            <option value="lithuanian">Lithuanian</option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="german">German</option>
          </select>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            placeholder="Enter your password..."
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password:</label>
          <input
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            placeholder="Repeat your password..."
            value={formik.values.passwordRepeat}
            onChange={formik.handleChange}
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </StyledSection>
  );
}
 
export default Register;