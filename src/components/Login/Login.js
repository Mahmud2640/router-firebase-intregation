import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./Login.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { getAuth } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [singInWithGoogle, user] = useSignInWithGoogle(auth);

  return (
    <div>
      <h2>This is Login!!!!</h2>
      <div className="login-btn">
        <Button variant="outline-primary" onClick={() => singInWithGoogle()}>
          Google Sign In
        </Button>
        <Button variant="outline-secondary">Facebook Sign In</Button>
        <Button variant="outline-success">Twitter Sign In</Button>
        <Button variant="outline-warning">Github Sign In</Button>
        <Button variant="outline-danger">Microsoft Sign In</Button>
        <Button variant="outline-info">Apple Sign In</Button>
        <Button variant="outline-secondary">Yahoo Sign In</Button>
        <Button variant="outline-success">Secondary</Button>
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
