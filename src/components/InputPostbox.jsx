import { useState } from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import { useUploadImg } from "../hooks/useUploadImg";

function InputPostbox() {
  const [postContent, postContentChange] = useInput("");

  const [imgFile, imgFileHandler] = useUploadImg("");

  return (
    <PostboxContainer>
      <PostTopContainer>
        <Imagebox>
          <MyProfileImg />
        </Imagebox>
        <PostInput
          onChange={postContentChange}
          value={postContent}
          placeholder="What's your feelings?"
        />
        <p>{postContent}</p>
      </PostTopContainer>

      <input type="file" onChange={imgFileHandler} />
      <img src={imgFile} />

      <ButtonContainer>
        <ButtonBox>
          <StButton>Upload Photos</StButton>
        </ButtonBox>
        <ButtonBox>
          <StButton>Post</StButton>
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
  background: #eee;
  border-radius: 33px;
  border: none;

  padding: 5px 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
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
