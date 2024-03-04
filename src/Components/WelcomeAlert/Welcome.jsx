import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import "./Welcome.css";

const Welcome = () => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert
        variant="warning text-dark"
        className="text-center"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Welcome into a fantastic Library!</Alert.Heading>
        <p>
          A fantastic set of your favourite Books! A collection that don't must
          miss in your journey
        </p>
      </Alert>
    );
  }
  return (
    <Button
      className="w-100 btn-no-radius"
      variant="danger"
      onClick={() => setShow(true)}
    >
      Show Alert
    </Button>
  );
};

export default Welcome;