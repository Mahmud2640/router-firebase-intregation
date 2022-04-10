import React from "react";
import useFirebase from "../../Hooks/useFirebase";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const Login = () => {
  const { signInWithGoogle } = useFirebase();

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
      <Form className="form-login">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
};

export default Login;
