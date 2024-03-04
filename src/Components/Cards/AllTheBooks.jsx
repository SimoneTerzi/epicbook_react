import { Container, Row, Col, Form } from "react-bootstrap";
import SingleBook from "../Cards/SingleBook"
import { useState, useEffect } from "react";
import axios from "axios";
import "../Cards/SingleBook";
import styles from "../Cards/SingleBook";

const AllTheBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);

  // Endpoint
  const url = "https://striveschool-api.herokuapp.com/books";

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProducts(data.slice(0, 25));
      console.log(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container className="mt-3 text-center">
      <div className={styles.scroll}></div>
      <Row xs={1} md={4} className="g-4">
        <Col>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Search a book"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        {products
          .filter(b => b.title.toLowerCase().includes(searchQuery))
          .map((book, asin) => {
            return (
              <Col key={asin}>
                <SingleBook book={book} id={asin} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;