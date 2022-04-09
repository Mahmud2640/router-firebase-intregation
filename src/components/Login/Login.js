import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css"

const Login = () => {
  const {signInWithGoogle} = useFirebase();

  return (
    <div>
      <h2>This is Login!!!!</h2>
      <div className="login-btn">
        <button onClick={signInWithGoogle}>Google Sign In</button>
        <button>Facebook Sign In</button>
        <button>Twitter Sign In</button>
        <button>Github Sign In</button>
        <button>Microsoft Sign In</button>
        <button>Apple Sign In</button>
        <button>Yahoo Sign In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" name="" id="" />
        <br />
        <input type="password" placeholder="Your Password" name="" id="" />
        <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
};

export default Login;
