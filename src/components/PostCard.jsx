import styled from "styled-components";

function PostCard() {
  return (
    <PostContainer>
      <PostTop>
        <PostPic></PostPic>
        <PostInfo>
          <p style={{ fontWeight: "bold" }}>Sparta Park</p>
          <p>12 hrs ago</p>
        </PostInfo>
      </PostTop>

      <PostContent>hello world!</PostContent>
      <LikeComment>
        <p>1.3k likes</p>
        <p>4.6k comment</p>
      </LikeComment>
      <ButtonContainer>
        <ButtonBox>
          <StButton>Like</StButton>
        </ButtonBox>
        <ButtonBox>
          <StButton>Comment</StButton>
        </ButtonBox>
      </ButtonContainer>
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

const PostPic = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #7b83c7;
`;
const PostInfo = styled.div`
  margin-left: 15px;
`;

const PostContent = styled.div`
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
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
