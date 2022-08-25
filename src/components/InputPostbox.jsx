import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { useUploadImg } from "../hooks/useUploadImg";
import { addFbPost } from "../redux/modules/postSlice";
import { getUserData } from "../storage/Cookie";
import PostInputModal from "./PostInputModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";





function InputPostbox() {
  const dispatch = useDispatch();

  const [postContent, postContentChange, setPostContent] = useInput("");

  const [inputToggle, setInputToggle] = useState(false);

  const onSubmitPost = () => {
    if (postContent === "") return;
    dispatch(addFbPost({ postContent }));
    setPostContent("");
  };

  const userInfo = getUserData();

  return (
    <PostboxContainer>
      <PostTopContainer>
        <Imagebox>
          <MyProfileImg src={userInfo.profileImage} />
        </Imagebox>
        <PostInput
          onChange={postContentChange}
          value={postContent}
          placeholder="What's your feelings?"
        />
      </PostTopContainer>
      {inputToggle === true ? <PostInputModal tg={setInputToggle} /> : null}
      {/* <PostInputModal /> */}
      <ButtonContainer>
        <ButtonBox>
          <StButton onClick={() => setInputToggle(true)}>
          <FontAwesomeIcon icon={faCameraRetro} style={{marginRight:"10px"}}/>
          Upload Photos
          </StButton>
        </ButtonBox>
        <ButtonBox>
          <StButton onClick={onSubmitPost}>
          <FontAwesomeIcon icon={faUpload} style={{marginRight:"10px"}}/>
            Post</StButton>
        </ButtonBox>
      </ButtonContainer>
    </PostboxContainer>
  );
}

const PostboxContainer = styled.div`
  width: 600px;
  margin-top: 20px;
  padding: 10px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const PostTopContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Imagebox = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background: #7b83c7;
`;

const MyProfileImg = styled.img`
  width: 100%;
  cursor: pointer;
`;

const PostInput = styled.input`
  height: 40px;

  margin-left: 10px;
  background: #f1f2f5;
  border-radius: 33px;
  border: none;

  padding: 5px 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  flex: 1;
`;

const ButtonBox = styled.div`
  padding: 5px 15px;
  margin: auto;
`;

const ButtonContainer = styled.div`
  box-shadow: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-top: 10px;
`;

const StButton = styled.button`
  border: none;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;
export default InputPostbox;
