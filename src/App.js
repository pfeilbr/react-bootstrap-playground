import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Button,
  CardGroup,
  CardColumns,
  Card
} from "react-bootstrap";

const buttonLabel = "Hi Brian";

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
    <div className="App">
      <Container>
        <CardColumns>
          <UserProfiles />
        </CardColumns>
      </Container>
    </div>
  );
}

export default App;
