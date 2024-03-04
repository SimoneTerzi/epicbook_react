import { useState } from "react";
import Card from "react-bootstrap/Card";
import styles from "./SingleBook.css";
import CommentArea from "../Modal/CommentArea";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// asin, img, title, category, price
const SingleBook = ({ book, asin }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <Card
      key={asin}
      style={{ width: "15rem" }}
      onClick={handleClick}
      className={selected ? styles.cardStyle : styles.card}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title className={styles.truncateText}>{book.title}</Card.Title>
        <Card.Subtitle>{book.category}</Card.Subtitle>
        <Card.Text>€ {book.price.toFixed(2)}</Card.Text>

        <Link to={`/details/${book.asin}`}>
          <Button variant="warning mb-1">Details</Button>
        </Link>

        <CommentArea asin={book.asin} />
      </Card.Body>
    </Card>
  );
};
export default SingleBook;