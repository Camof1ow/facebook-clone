import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInput } from "../hooks/useInput";
import { addComment, deleteComment } from "../redux/modules/commentSlice";
import { getUserData } from "../storage/Cookie";
import { ModalDiv, ModalLayer } from "../UI/Modal";
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
        <ModalDiv>
          <h1>Comments</h1>
          <button onClick={() => tg(false)}>X</button>
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
            <button onClick={onSendComment}>send</button>
          </InOneLine>
        </ModalDiv>
      </ModalLayer>
    </>
  );
}
// }

export default CommentList;
