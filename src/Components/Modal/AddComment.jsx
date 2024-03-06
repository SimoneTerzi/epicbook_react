

import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { token, apiUrlComment } from "../../Fetch/Token";
import Rating from "react-rating-stars-component";

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
      let response = await axios.post(`${apiUrlComment}`, comment, {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200 || response.status === 201) {
        alert("Recensione inviata!");
        setComment({
          comment: "",
          rate: 1,
          elementId: null,
        });
        
        
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
      <Rating
        count={5}
        value={comment.rate}
        onChange={(value) =>
          setComment({
            ...comment,
            rate: value,
          })
        }
        size={24}
        activeColor="#ffd700"
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
