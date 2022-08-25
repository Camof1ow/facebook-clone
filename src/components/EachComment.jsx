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

import styled from "styled-components";

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
          <button style={{marginLeft: "5px"}}
            onClick={() => {
              onDeleteComment(comment.id);
            }}
          >
            delete
          </button>
          <button style={{marginLeft: "5px"}} onClick={() => setEditToggle(true)}>edit</button>
        </>
      ) : (
        <div>
          <UiInput value={editedComment} onChange={editedCommentHandler} />
          <button style={{marginLeft: "5px"}}onClick={() => onEditComment(comment.id)}>수정</button>
          <button style={{marginLeft: "5px"}}onClick={() => setEditToggle(false)}>취소</button>
        </div>
      )}
    </>
  );
}

export default EachComment;

const StBtn = styled.button`
  padding: 10px;
  margin: 0px 0px 10px 3px;
  width: 60px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  border: solid 1px;
  float: left;
`;