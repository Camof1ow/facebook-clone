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
import { getUserData } from "../storage/Cookie";

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

  const userinfo = getUserData();

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
          {userinfo.nickname === comment.nickname ? (
            <>
              <StButton
                style={{ marginLeft: "5px", color: "red" }}
                onClick={() => {
                  onDeleteComment(comment.id);
                }}
              >
                delete
              </StButton>
              <StButton
                style={{ marginLeft: "5px" }}
                onClick={() => setEditToggle(true)}
              >
                edit
              </StButton>
            </>
          ) : null}
        </>
      ) : (
        <div>
          <UiInput value={editedComment} onChange={editedCommentHandler} />
          <StButton
            style={{ marginLeft: "5px" }}
            onClick={() => onEditComment(comment.id)}
          >
            수정
          </StButton>
          <StButton
            style={{ marginLeft: "5px", color: "red" }}
            onClick={() => setEditToggle(false)}
          >
            취소
          </StButton>
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

const StButton = styled.button`
  border: none;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;
