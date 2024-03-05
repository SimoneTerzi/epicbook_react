import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const SingleComment = ({ comment, setComments }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await axios.delete(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI0ZmFhNzM4MjY2NTAwMTljNzEwOTkiLCJpYXQiOjE3MDk1NjQ5MzcsImV4cCI6MTcxMDc3NDUzN30.QWv-Cb42iFxWfbKguj0mFpz8UrhpInI8ItW8TclYawY',
          },
        }
      );
      if (response.status === 200) {
        alert('La recensione è stata eliminata!');

        setComments((prevComments) =>
          prevComments.filter((com) => com._id !== asin)
        );
      } else {
        throw new Error('La recensione non è stata eliminata!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div>
        <p>{comment.comment}</p>
        <p>Rate: {comment.rate}</p>
      </div>
      <Button variant="danger" onClick={() => deleteComment(comment._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
