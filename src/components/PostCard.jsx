import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllCommentsById } from "../redux/modules/commentSlice";
import { deleteFbPost } from "../redux/modules/postSlice";
import CommentList from "./CommentList";
import EditModal from "./EditModal";

function PostCard({ posts, i }) {
  const dispatch = useDispatch();

  const id = posts.posts.id;

  const onDeletePost = () => {
    dispatch(deleteFbPost(Number(id)));
  };

  const [EditToggle, setEditToggle] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);

  const onGetComment = () => {
    setCommentToggle(!commentToggle);
    if (commentToggle === false) {
      dispatch(getAllCommentsById(id));
    }
  };

  return (
    <PostContainer key={i}>
      <PostTop>
        <PostProfileImgDiv>
          <PostProfileImg src={posts.posts.member.profileImg} />
        </PostProfileImgDiv>
        <PostInfo>
          <p style={{ fontWeight: "bold" }}>{posts.posts.member.nickname}</p>
          <p>{posts.posts.createdAt}</p>
        </PostInfo>
      </PostTop>
      <StButton style={{ color: "red" }} onClick={onDeletePost}>
        delete
      </StButton>
      <StButton style={{ color: "blue" }} onClick={() => setEditToggle(true)}>
        edit
      </StButton>

      {EditToggle === true ? (
        <EditModal tg={setEditToggle} postId={id} />
      ) : null}

      <PostContent>{posts.posts.content}</PostContent>
      {posts.posts.imageUrl !== null ? (
        <PostContentImgDiv>
          <PostContentImg src={posts.posts.imageUrl} />
        </PostContentImgDiv>
      ) : null}

      <LikeComment>
        <p>{posts.likeNum}</p>
        <p>{posts.commentNum}</p>
      </LikeComment>
      <ButtonContainer>
        <ButtonBox>
          <StButton>Like</StButton>
        </ButtonBox>
        <ButtonBox>
          <StButton onClick={onGetComment}>Comment</StButton>
        </ButtonBox>
      </ButtonContainer>

      {commentToggle === true ? (
        <CommentList postId={id} tg={setCommentToggle} />
      ) : null}
    </PostContainer>
  );
}

const PostContainer = styled.div`
  width: 600px;

  padding: 10px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
`;

const PostProfileImgDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #7b83c7;
`;

const PostProfileImg = styled.img`
  width: 100%;
`;
const PostInfo = styled.div`
  margin-left: 15px;
`;

const PostContent = styled.div`
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
`;

const PostContentImgDiv = styled.div`
  margin-left: 30px;
  width: 500px;
  overflow: hidden;
`;

const PostContentImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LikeComment = styled.div`
  box-shadow: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  box-shadow: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-top: 10px;
`;

const ButtonBox = styled.div`
  padding: 5px 15px;
  margin: auto;
`;

const StButton = styled.button`
  border: none;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;

export default PostCard;
