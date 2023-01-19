import { Link } from "react-router-dom";
import auth from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const SignUp = () => {
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">Email: </label>
        <input type="text" name="" id="" placeholder="Enter your email" />
        <br />
        <br />
        <label htmlFor="">Password: </label>
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
        />
        <br />
        <br />

        <button type="submit">Sign up</button>
      </form>

      <p>
        Already have an account
        <Link to="/Signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
