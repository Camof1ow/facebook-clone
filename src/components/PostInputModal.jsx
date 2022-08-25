import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { useUploadImg } from "../hooks/useUploadImg";
import { addFbPost } from "../redux/modules/postSlice";
import { ModalDiv, ModalLayer } from "../UI/Modal";

function PostInputModal({ tg }) {
  const dispatch = useDispatch();

  const [postContent, postContentChange] = useInput("");

  const [imgFile, imgFileHandler] = useUploadImg("");

  const onSubmitPostWithImg = () => {
    if (postContent === "" && imgFile === "") return;
    dispatch(addFbPost({ postContent, imgFile }));
    tg(false);
  };

  return (
    <ModalLayer>
      <ModalDiv style={{padding: "10px", height: "700px", paddingLeft:"30px", paddingRight:"3px"}}>
        <h2>Create Post</h2>
        <PostInput
          type="textarea"
          rows="10"
          value={postContent}
          onChange={postContentChange}
          placeholder="How are you doing?"
          style={{position: "relative"}}
        />
        <Imagebox>
          <PostImage src={imgFile} />
        </Imagebox>
        <PostInput type="file" onChange={imgFileHandler} style={{hegith: "10px", marginBottom: "0px"}}/>

        <ButtonContainer style={{marginTop:"0px"}}>
          <ButtonBox>
            <StButton onClick={() => tg(false)} style={{ color: "red" }}>
              Close
            </StButton>
          </ButtonBox>
          <ButtonBox>
            <StButton onClick={onSubmitPostWithImg} style={{ color: "blue" }}>
              Post
            </StButton>
          </ButtonBox>
        </ButtonContainer>
      </ModalDiv>
    </ModalLayer>
  );
}

const PostInput = styled.input`
  width: 340px;
  height: 100px;

  margin-left: 10px;
  background: #fff;

  border: none;
  padding-top: 0px;
  padding: 5px 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  flex: 1;
`;

const Imagebox = styled.div`
  width: 360px;
  height: 360px;
  overflow: hidden;
  border-radius: 20px;
`;

const PostImage = styled.img`
  width: 100%;
  cursor: pointer;
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

export default PostInputModal;
