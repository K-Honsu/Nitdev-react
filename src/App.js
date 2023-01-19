import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SignUp from "./Signup";
import SignIn from "./Signin";

function App() {
  return (
    <div className="App">
      <h1>HomePage</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
