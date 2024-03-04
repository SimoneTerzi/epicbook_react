import { Button, ListGroup } from "react-bootstrap";
import axios from "axios";

const SingleComment = ({ comment, setComments }) => {
  const deleteComment = async asin => {
    try {
      let response = await axios.delete(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWRhMGQyNmQwMDFmMzAwMTk2YWM5NzkiLCJpYXQiOjE3MDg3ODkwMzAsImV4cCI6MTcwOTk5ODYzMH0.CPuSb74ofvTVMHzBMgmJVarrTAdiPf_5HJfCHwHI2Go",
          },
        }
      );
      if (response.status === 200) {
        alert("La recensione è stata elimata!");

        setComments(prevComments =>
          prevComments.filter(com => com._id !== asin)
        );
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;