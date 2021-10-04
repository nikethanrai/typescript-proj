import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import "./App.css";

const Home = ({ Login, error }) => {
  const [details, setDetails] = useState({ name: "", email: "", password: "" });

  const submitHandler = (e: any) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <div>
      <Container className="d-flex justify-content-center align-items-center login-page ">
        <h1 className="title">Login Page</h1>
        <h6>email: admin@admin.com, pw: admin123</h6>

        {error != "" ? <div> {error}</div> : ""}

        <Form className="login-sec" onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>User name</Form.Label>
            <Form.Control
              placeholder="UserName"
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
              value={details.name}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
              value={details.email}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setDetails({ ...details, password: e.target.value });
              }}
              value={details.password}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default Home;
