// Nel componente AddComment
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

const AddComment = ({ asin, updateComments }) => {
  const [comment, setComment] = useState({
    elementId: asin,
    rate: 0,
    comment: "",
  });

  useEffect(() => {
    setComment((prevComment) => ({ ...prevComment, elementId: asin }));
  }, [asin]);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "https://striveschool-api.herokuapp.com/api/comments/",
        comment,
        {
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI0ZmFhNzM4MjY2NTAwMTljNzEwOTkiLCJpYXQiOjE3MDk1NjQ5MzcsImV4cCI6MTcxMDc3NDUzN30.QWv-Cb42iFxWfbKguj0mFpz8UrhpInI8ItW8TclYawY",
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        });
        // Chiamata alla funzione di aggiornamento dei commenti
        updateComments();
      } else {
        throw new Error("Qualcosa è andato storto");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <input
        onChange={(e) =>
          setComment({
            ...comment,
            rate: Number(e.target.value),
          })
        }
        value={comment.rate}
        type="number"
        min={1}
        max={5}
        placeholder="rate"
      />
      <input
        onChange={(e) =>
          setComment({
            ...comment,
            comment: e.target.value,
          })
        }
        value={comment.comment}
        type="text"
        placeholder="comment"
      />
      <Button onClick={sendComment}>Add Comment</Button>
    </div>
  );
};

export default AddComment;
