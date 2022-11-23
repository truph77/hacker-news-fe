import React from "react";
import { Link } from "react-router-dom";
import { WrapLogin } from "./styles";

const Login = () => {
  return (
    <WrapLogin>
      <strong>Login</strong>
      <br />
      <br />
      <div>
        username: <input />
      </div>
      <div>
        password: <input />
      </div>
      <div style={{ margin: "5px 0" }}>
        <button>Login</button>
      </div>
      <div style={{ margin: "5px 0" }}>
        <Link to="/#">Forgot your password?</Link>
      </div>

      <strong>Create Account</strong>
      <br />
      <br />
      <div>
        username: <input />
      </div>
      <div>
        password: <input />
      </div>
      <div style={{ margin: "5px 0" }}>
        <button>Create Account</button>
      </div>
    </WrapLogin>
  );
};

export default Login;
