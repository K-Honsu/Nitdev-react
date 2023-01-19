import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "./firebase";
const SignIn = () => {
  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form action="" onSubmit={handleSignin}>
        <label htmlFor="">Email: </label>
        <input type="text" placeholder="Enter email" />
        <br />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
