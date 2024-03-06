import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Button } from "react-bootstrap";
import { token, apiUrlBook } from "../Fetch/Token";


const Bookdetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBookDetails = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrlBook}${id}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const dataDetails = await response.data;
      setBook(dataDetails);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchBookDetails();
  }, [fetchBookDetails]);

  return (
    <>
      <Button as={Link} to="/" className="btn btn-primary mb-4 btn-lg d-block mx-auto">
        HomePage
      </Button>
      <div className="full-screen-container">
        <Container fluid className="d-flex justify-content-center align-items-center h-100">
          <Card className="bg-dark text-white m-4" style={{ maxWidth: "800px", width: "100%" }}>
            {book && (
              <Card.Img
                variant="top"
                src={book.img}
                alt="cover libro"
                className="book-image"
              />
            )}
            <Card.Body className="text-center">
              {book && (
                <>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{book.category}</Card.Subtitle>
                  <Card.Text>
                    Prezzo: <span>€{book.price}</span>
                  </Card.Text>
                  <Card.Text>
                    Cod. ASIN: <span>{book.asin}</span>
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default Bookdetails;

