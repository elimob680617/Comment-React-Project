import { useEffect, useState } from "react";
import { deleteComment } from "../../services/deleteComment";
import { getAllComments } from "../../services/getAllComments";
import { getOneComment } from "../../services/getOneComment";
import "./FullComment.css";

const FullComment = ({ id, setComments, setSelected }) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    if (id) {
      getOneComment(id)
        .then((response) => setComment(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const deleteHandler = async () => {
    try {
      await deleteComment(id);
      const { data } = await getAllComments();
      setComments(data);
      setSelected(null);
      setComment(null);
    } catch (error) {
      console.error(error);
    }
  };

  let commentDetail = <p>Select One!</p>;
  if (id) commentDetail = <p>Loading...</p>;
  if (comment)
    commentDetail = (
      <div className="fullComment">
        <span>
          <b>Username : </b>
          <span>{comment.name}</span>
        </span>

        <span>
          <b>Email : </b>
          <span>{comment.email}</span>
        </span>
        <span>
          <b>Description : </b>

          <span>{comment.body}</span>
        </span>
        <button onClick={deleteHandler}>Delete</button>
      </div>
    );

  return commentDetail;
};

export default FullComment;
