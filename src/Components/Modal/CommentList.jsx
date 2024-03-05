// Nel componente CommentList
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { Row, Col } from "react-bootstrap";

const CommentList = ({ commentsToShow, setComments }) => {
  return (
    <Row>
      <Col className="w-35">
        <ListGroup style={{ color: "black" }} className="mt-2">
          {commentsToShow.map((comment) => (
            <SingleComment
              setComments={setComments}
              comment={comment}
              key={comment._id}
            />
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default CommentList;
