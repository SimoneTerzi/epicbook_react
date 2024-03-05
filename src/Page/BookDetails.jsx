import React, { useEffect, useState, useCallback } from "react";
import Mainlayout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container } from "react-bootstrap";


const Bookdetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const fetchBookDetails = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://striveschool-api.herokuapp.com/books/${id}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhMGQyNmQwMDFmMzAwMTk2YWM5NzkiLCJpYXQiOjE3MDg3ODkwMzAsImV4cCI6MTcwOTk5ODYzMH0.CPuSb74ofvTVMHzBMgmJVarrTAdiPf_5HJfCHwHI2Go",
          },
        }
      );
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
    <Mainlayout>
      <div className="full-screen-container">
        <Container fluid className="d-flex justify-content-center align-items-center h-100">
          <Card
            className="bg-dark text-white m-4"
            style={{ width: "100%", height: "100%" }}
          >
            {book && (
              <Card.Img
                variant="top"
                src={book.img}
                alt="cover libro"
                style={{
                  width: "100%",
                  height: `${windowHeight}px`, // Imposta l'altezza in base all'altezza della finestra
                  objectFit: "cover",
                }}
              />
            )}
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              {book && (
                <>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle>{book.category}</Card.Subtitle>
                  <Card.Text>
                    prezzo: <span>€{book.price}</span>
                  </Card.Text>
                  <Card.Text>
                    cod. asin: <span>{book.asin}</span>
                  </Card.Text>
                </>
              )}
            </Card.Body>
          </Card>
        </Container>
      </div>
    </Mainlayout>
  );
};

export default Bookdetails;
