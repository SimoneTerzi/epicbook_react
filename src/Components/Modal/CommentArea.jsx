import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import Loading from "../LoadingBar/Loading";
import Error from "../Alert/AlertError";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import "./Modal.css";

const CommentArea = ({ asin }) => {
  // Bootstrap
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  // State Comment Area
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log(comments);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

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
  useEffect(() => {
    getComments();
   
  }, [asin]);

  return (
    <Row>
      <Col>
        {values.map((v, idx) => (
          <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
            Add comment
            {typeof v === "string" && `below ${v.split("-")[0]}`}
          </Button>
        ))}
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
            <Row>
              {isLoading && <Loading />}
              {isError && <Error />}
              <Col className="w-25">
                <CommentList
                  commentsToShow={comments}
                  setComments={setComments}
                />
              </Col>
              <Col className="w-75">
                <AddComment asin={asin} />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Col>
    </Row>
  );
};

export default CommentArea;
