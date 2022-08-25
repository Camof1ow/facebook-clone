import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import { deleteComment, editComment } from "../redux/modules/commentSlice";

import {
  GreyDivBox,
  InOneLine,
  ProfileImg,
  ProfileImgDiv,
  UiInput,
} from "../UI/UiTags";

function EachComment({ postId, comment }) {
  const dispatch = useDispatch();
  const [editToggle, setEditToggle] = useState(false);

  const [editedComment, editedCommentHandler] = useInput("");

  const onDeleteComment = (cid) => {
    dispatch(deleteComment({ postId, cid }));
    // console.log(postId);
  };

  const onEditComment = (cid) => {
    dispatch(editComment({ postId, cid, editedComment }));
    setEditToggle(false);
    console.log(editedComment);
  };

  return (
    <>
      {editToggle === false ? (
        <>
          <GreyDivBox>
            <p style={{ fontSize: "16px", fontWeight: "bold" }}>
              {comment.nickname}
            </p>
            <p key={comment.id} style={{ fontSize: "16px" }}>
              {comment.comment}
            </p>
          </GreyDivBox>{" "}
          <button
            onClick={() => {
              onDeleteComment(comment.id);
            }}
          >
            delete
          </button>
          <button onClick={() => setEditToggle(true)}>edit</button>
        </>
      ) : (
        <div>
          <UiInput value={editedComment} onChange={editedCommentHandler} />
          <button onClick={() => onEditComment(comment.id)}>수정완료</button>
          <button onClick={() => setEditToggle(false)}>cancel</button>
        </div>
      )}
    </>
  );
}

export default EachComment;
