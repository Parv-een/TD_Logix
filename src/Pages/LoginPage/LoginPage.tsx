import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import classes from "./LoginPage.module.css";
//import LoginPageModule from "./LoginPageModule.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    //alert(`${email} , ${password}`);
    navigate("/landingPage", {
      state: {
        user: {
          email,
        },
      },
    });
  };

  return (
    <div>
      <Container className={classes.container + "center"}>
        <Form noValidate validated={validated} onSubmit={onSubmitHandler}>
          <h1>TD LOGIX</h1>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>

          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>

          <Button
            variant="primary"
            disabled={!email || !password}
            onClick={() => onSubmitHandler}
            type="submit"
          >
            Login In
          </Button>
        </Form>
      </Container>
    </div>
  );
};
export default LoginPage;
