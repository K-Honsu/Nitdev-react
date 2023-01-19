const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form action="">
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
