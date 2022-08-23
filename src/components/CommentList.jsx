import { useDispatch } from "react-redux";
import { useInput } from "../hooks/useInput";
import { addComment } from "../redux/modules/commentSlice";

function CommentList({ postId }) {
  const dispatch = useDispatch();

  const [comment, commentHandler, setComment] = useInput("");

  const onSendComment = () => {
    dispatch(addComment({ postId, comment }));
    setComment("");
  };

  return (
    <>
      <input type="text" value={comment} onChange={commentHandler} />
      <button onClick={onSendComment}>Send</button>
      <p>hello</p>
    </>
  );
}

export default CommentList;
