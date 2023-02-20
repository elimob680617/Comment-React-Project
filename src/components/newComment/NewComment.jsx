import { useState } from "react";
import { addNewComment } from "../../services/addNewComment";
import { getAllComments } from "../../services/getAllComments";
import "./NewComment.css";

const NewComment = ({ setComments }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  const changeHandler = (e) => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComment({
        ...comment,
        postId: 10,
      });

      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      console.error(error);
    }
    // http
    //   .post("/comments", {
    //     ...comment,
    //     postId: 10,
    //   })
    //   .then((res) => http.get("/comments"))
    //   .then((res) => setComments(res.data))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="newComment">
      <h3>Add new comment!</h3>
      <form>
        <div>
          <label htmlFor="name">Username</label>
          <input type="text" onChange={changeHandler} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={changeHandler}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="discription">Description</label>
          <textarea
            type="textarea"
            id="description"
            onChange={changeHandler}
            name="body"
            rows="4"
            cols="60"
          />
        </div>
        <button onClick={postCommentHandler}>Add Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
