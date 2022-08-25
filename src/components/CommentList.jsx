import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import { addComment, deleteComment } from "../redux/modules/commentSlice";
import { getUserData } from "../storage/Cookie";
import { ModalDiv, ModalLayer } from "../UI/Modal";
import styled from "styled-components";
import {
  GreyDivBox,
  InOneLine,
  ProfileImg,
  ProfileImgDiv,
  UiInput,
} from "../UI/UiTags";
import EachComment from "./EachComment";

function CommentList({ postId, tg }) {
  const dispatch = useDispatch();

  const { comments } = useSelector((state) => state.comments);

  console.log(comments);

  const [comment, commentHandler, setComment] = useInput("");

  const onSendComment = () => {
    dispatch(addComment({ postId, comment }));
    setComment("");
  };

  const userData = getUserData();

  // if (postId === comments.postId) {
  return (
    <>
      <ModalLayer>
        <ModalDiv style={{padding: "20px"}}>
          <h1>Comments <StBtnX onClick={() => tg(false)}>X</StBtnX></h1>
          
          <div style={{ height: "600px", overflow: "scroll" }}>
            {comments.map((comment) => (
              <InOneLine style={{ marginTop: "30px" }}>
                <ProfileImgDiv>
                  <ProfileImg />
                </ProfileImgDiv>
                <EachComment postId={postId} comment={comment} />
              </InOneLine>
            ))}{" "}
          </div>

          <InOneLine
            style={{ bottom: "20px", position: "absolute", float: "left" }}
          >
            <ProfileImgDiv>
              <ProfileImg src={userData.profileImage} />
            </ProfileImgDiv>
            <UiInput
              placeholder="write a comment"
              type="text"
              value={comment}
              onChange={commentHandler}
              style={{ height: "30px", width: "330px" }}
            />
            <StBtn onClick={onSendComment}>send</StBtn>
          </InOneLine>
        </ModalDiv>
      </ModalLayer>
    </>
  );
}
// }

export default CommentList;

const StBtn = styled.button`
  padding: 10px;
  margin: 10px 0px 10px 3px;
  width: 50px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;

const StBtnX = styled.button`
  background-color: white;
  position: right;
  text-align: right;
  margin: 0px;
  width: 0px;
  height: 0px;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;