import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Comment from "../../components/comment/Comment";
import FullComment from "../../components/fullComment/FullComment";
import NewComment from "../../components/newComment/NewComment";

import { getAllComments } from "../../services/getAllComments";
import "./Discussion.css";

const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selected, setSelected] = useState(null);
  const [error, setError] = useState(false);
  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    try {
      const { data } = await getAllComments();
      setComments(data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const selectedCommentHandler = (id) => {
    setSelected(id);
  };

  // const deleteHandler = (selected) => {
  //   http
  //     .delete(`http://localhost:3001/comments/${selected}`)
  //     .then((res) => http.get("http://localhost:3001/comments"))
  //     .then((res) => setComments(res.data))
  //     .catch((err) => console.error(err));
  // };

  const renderComments = () => {
    let renderedValue = <p>Loading...</p>;

    if (error) {
      renderedValue = <p>Fetching Data Failed!</p>;
      notify();
    }

    if (comments && !error)
      renderedValue = comments.map((c) => (
        <div>
          <Comment
            key={c.id}
            name={c.name}
            email={c.email}
            body={c.body}
            onClick={() => selectedCommentHandler(c.id)}
          />
        </div>
      ));

    return renderedValue;
  };

  return (
    <main>
      <section className="all-comments">
        <h3>All Comments</h3>
        {renderComments()}
      </section>
      <section>
        <FullComment
          id={selected}
          setComments={setComments}
          setSelected={setSelected}
        />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </main>
  );
};

export default Discussion;
