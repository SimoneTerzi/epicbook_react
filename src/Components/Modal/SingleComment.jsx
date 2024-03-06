import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import axios from "axios";
import { token, apiUrlComment } from "../../Fetch/Token";
import Rating from "react-rating-stars-component";

const SingleComment = ({ comment, setComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await axios.delete(`${apiUrlComment}${asin}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        alert("La recensione è stata eliminata!");
        setComments((prevComments) =>
          prevComments.filter((com) => com._id !== asin)
        );
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <p>{comment.comment}</p>
        <Rating
          count={5}
          value={comment.rate}
          size={24}
          edit={false}
          activeColor="#ffd700"
        />
      </div>
      <Button variant="danger" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
