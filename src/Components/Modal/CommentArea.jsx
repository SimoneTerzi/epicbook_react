import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Loading from "../LoadingBar/Loading";
import Error from "../Alert/AlertError";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = ({ asin }) => {
  // Bootstrap
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  // State Comment Area
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  };

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true);
      try {
        let response = await axios.get(
          "https://striveschool-api.herokuapp.com/api/comments/" + asin,
          {
            headers: {
              "Content-type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhMGQyNmQwMDFmMzAwMTk2YWM5NzkiLCJpYXQiOjE3MDg3ODkwMzAsImV4cCI6MTcwOTk5ODYzMH0.CPuSb74ofvTVMHzBMgmJVarrTAdiPf_5HJfCHwHI2Go",
            },
          }
        );
        if (response.status === 200) {
          let commentsData = await response.data;
          setComments(commentsData);
          setIsLoading(false);
          setIsError(false);
        } else {
          console.log("error");
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };

    getComments();
  }, [asin]);

  return (
    <Row>
      <Col>
        <Button className="me-2 mb-2" onClick={() => handleShow(true)}>
          Add comment
        </Button>
        <Modal
          className="bg-dark"
          show={show}
          fullscreen={fullscreen}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Comments</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLoading && <Loading />}
            {isError && <Error />}
            <Row className="justify-content-center">
              <Col xs={12} md={8} lg={4}> {/* Utilizziamo il grid system di Bootstrap per impostare la larghezza */}
                <AddComment asin={asin} />
              </Col>
            </Row>
            <CommentList commentsToShow={comments} setComments={setComments} />
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

export default CommentArea;
