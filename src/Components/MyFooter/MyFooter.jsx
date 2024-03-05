import Card from "react-bootstrap/Card";

const MyFooter = () => {
  return (
    <Card className="rounded-0 border-0 mt-3" text="center"
    style={{ height: "20rem" }}>
      <Card.Body>
        <h1>EPICBOOKS</h1>
        TerziS Design <strong>Anubis Project</strong>, Veneto Cio, Biondo
      </Card.Body>
    </Card>
  );
};

export default MyFooter;
