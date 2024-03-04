import React, { useEffect, useState } from "react";
import Mainlayout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import style from "../Page/BookDetails.css";

const Bookdetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  console.log(book);

  const getBookDetails = async () => {
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
  };
  useEffect(() => {
    getBookDetails();
  }, [id]);

  return (
    <Mainlayout>
      <Container className="d-flex justify-content-center">
        <Card
          className="bg-dark text-white m-4"
          style={{ width: "20rem", height: "40rem" }}
        >
          <Card.Img variant="top" src={book && book.img} alt="cover libro" />
          <Card.Body>
            {/* {<p>{book ? book.id : "Nessun titolo disponibile"}</p> */}
            <Card.Title>{book && book.title}</Card.Title>
            <Card.Subtitle>{book && book.category}</Card.Subtitle>
            <Card.Text>
              prezzo: <span>€{book && book.price}</span>
            </Card.Text>
            <Card.Text>
              cod. asin: <span>{book && book.asin}</span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Mainlayout>
  );
};

export default Bookdetails;