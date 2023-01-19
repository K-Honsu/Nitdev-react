import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>
        Sign in
        <Link to="/Signin"> Sign in</Link>
      </p>
      <p>
        Don't have an account?
        <Link to="/Signup"> Sign Up</Link>
      </p>
      <p>
        Sign out
        <Link to="/Signout"> Sign Out</Link>
      </p>
    </div>
  );
};

export default Home;
