import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "./firebase";
const Signout = () => {
  const navigate = useNavigate();
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const res = await signOut(auth);
      navigate("/");
      console.log(res);
      console.log("User signed out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleSignOut}>Log out</button>
    </div>
  );
};

export default Signout;
