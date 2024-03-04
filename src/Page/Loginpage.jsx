import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeFormData = e => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios
      .post("https://dummyjson.com/auth/login", loginForm)
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("auth", JSON.stringify(response.data));
          navigate("/home");
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <Container className="d-flex justify-content-center  text-center mt-5 bg-dark text-light rounded">
      <form onSubmit={onSubmit}>
        <Form.Label className="m-2">Username</Form.Label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={loginForm.username}
          onChange={onChangeFormData}
        />
        <Form.Label className="m-2">Password</Form.Label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={loginForm.password}
          onChange={onChangeFormData}
        />
        <Button variant="primary m-3" type="submit">
          login
        </Button>
      </form>
    </Container>
  );
};

export default Loginpage;