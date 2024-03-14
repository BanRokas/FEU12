import { useFormik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

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
      const newUser = {
        ...values,
        avatarURL: values.avatarURL ? values.avatarURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
      }
      console.log(newUser);
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, 'User name must be at least 4 symbols length')
        .max(20, 'User name can be up to 20 symbols length')
        .required('Field must be filled')
        .trim(),
      email: Yup.string()
        .email('Field must be a valid email')
        .required('Field must be filled')
        .trim(),
      avatarURL: Yup.string()
        .url('Fields must be a valid url')
        // .default('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png')
        .trim(),
      age: Yup.number()
        .min(18, 'Must be at least 18 years old')
        .integer('Age must be an integer')
        .required('Field must be filled'),
      gender: Yup.string().required('Must select a gender'),
      language: Yup.string().required('Must select a language'),
      password: Yup.string()
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/,
          'Password must be at least: one lower case, one upper case, one number, one special symbol and length to be between 8 and 25'
        )
        .required('Field must be filled')
        .trim(),
      passwordRepeat: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Field must be filled')
    })
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
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.userName && formik.errors.userName && 
            <span>{formik.errors.userName}</span>
          }
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email" id="email"
            placeholder="Enter your email..."
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.email && formik.errors.email && 
            <span>{formik.errors.email}</span>
          }
        </div>
        <div>
          <label htmlFor="avatarURL">Profile Picture:</label>
          <input
            type="url"
            name="avatarURL" id="avatarURL"
            placeholder="Enter profile picture url..."
            value={formik.values.avatarURL}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.avatarURL && formik.errors.avatarURL && 
            <span>{formik.errors.avatarURL}</span>
          }
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age" id="age"
            placeholder="Enter your age..."
            step={1}
            value={formik.values.age}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.age && formik.errors.age && 
            <span>{formik.errors.age}</span>
          }
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
          {
            formik.touched.gender && formik.errors.gender && 
            <span>{formik.errors.gender}</span>
          }
        </div>
        <div>
          <label htmlFor="language">Select Your Native Language:</label>
          <select name="language" id="language"
            value={formik.values.language}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="" disabled></option>
            <option value="lithuanian">Lithuanian</option>
            <option value="english">English</option>
            <option value="russian">Russian</option>
            <option value="german">German</option>
          </select>
          {
            formik.touched.language && formik.errors.language && 
            <span>{formik.errors.language}</span>
          }
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password" id="password"
            placeholder="Enter your password..."
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.password && formik.errors.password && 
            <span>{formik.errors.password}</span>
          }
        </div>
        <div>
          <label htmlFor="passwordRepeat">Repeat Password:</label>
          <input
            type="password"
            name="passwordRepeat" id="passwordRepeat"
            placeholder="Repeat your password..."
            value={formik.values.passwordRepeat}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {
            formik.touched.passwordRepeat && formik.errors.passwordRepeat && 
            <span>{formik.errors.passwordRepeat}</span>
          }
        </div>
        <input type="submit" value="Register" />
      </form>
    </StyledSection>
  );
}
 
export default Register;