import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Button,
  CardGroup,
  CardColumns,
  Card
} from "react-bootstrap";

const buttonLabel = "Hi Brian";

const About = () => <h1>about</h1>;

const MyHelloComponent = props => {
  return <h1>{props.msg}</h1>;
};

const users = [
  {
    name: "Wyatt Pfeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Max Pfeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Tricia Pfeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "Brian Pfeil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Smith",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    name: "John Doe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const UserProfile = props => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.buttonLabel}</Button>
      </Card.Body>
    </Card>
  );
};

const UserProfiles = () => {
  return (
    <>
      {users.map(user => (
        <UserProfile
          name={user.name}
          description={user.description}
          buttonLabel="Details"
        />
      ))}
    </>
  );
};

function App() {
  return (
    <Router>
      <Container>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/about">About</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/users">Users</Link>
            </Breadcrumb.Item>
          </Breadcrumb>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <CardColumns>
                <UserProfiles />
              </CardColumns>
            </Route>
            <Route path="/">
              <MyHelloComponent msg="Home Here" />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  );
}

export default App;
