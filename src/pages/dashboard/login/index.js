import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "../../../style/login.css";

function Login() {
  return (
    <>
      <div className="bg-card">
        <div className="login-card">
          <img src="https://osissmkislamiyahciputat.files.wordpress.com/2020/02/yayasan.png" />
          <h1>SMK Islamiyah Login</h1>
          <p>Please login to access these features.</p>
          <Form className="mt-3">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="btn-login mt-3" variant="primary" type="submit">
              Login
            </Button>
          </Form>
          <p>
            Change your mind ? <Link to={"/"}>Return home</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
