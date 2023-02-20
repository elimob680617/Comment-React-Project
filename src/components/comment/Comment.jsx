import "./Comment.css";
import ghost from "../../assets/ghost.png";

const Comment = ({ name, email, onClick, body }) => {
  return (
    <div className="user-comment">
      <div className="user">
        <img src={ghost} alt="user" width={"30px"} />
        <p>
          <b>Username : </b>
          {name}
        </p>
      </div>
      <div className="comment" onClick={onClick}>
        <span>
          <b>Email : </b>
          {email}
        </span>
        <span>
          <b>Summary : </b>
          <div className="desc">{body}</div>
        </span>
      </div>
    </div>
  );
};

export default Comment;
