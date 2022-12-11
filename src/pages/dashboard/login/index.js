import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

import "../../../style/login.css";

function Login() {
  // Axios change
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });

  // const baseURLAPI = "https://api.smkislamiyahciputattangsel.sch.id";

  // const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    try {
      const response = await axiosInstance.post(
        "/login",
        {
          email: email,
          password: password,
        },
        config
      );
      console.log("success login");
      console.log(response.data);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div className="bg-card">
        <div className="login-card text-center">
          <img
            alt="logo yayasan"
            src="https://osissmkislamiyahciputat.files.wordpress.com/2020/02/yayasan.png"
          />
          <h1>SMK Islamiyah Login</h1>
          <p>Please login to access these features.</p>
          <p>{msg}</p>
          <Form className="mt-3" onSubmit={Login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
