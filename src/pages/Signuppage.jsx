import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };
// import Header from ".components/Header"

function SignUp() {
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const [isUsername, setIsUsername] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const [usernameMsg, setUsernameMsg] = useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordConfirmMsg, setPasswordConfirmMsg] = useState("");

  const onChangeUsername = (event) => {
    const usernameRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (event.target.value && usernameRegex.test(event.target.value)) {
      setIsUsername(true);
      setUsernameMsg("올바른 이메일 형식입니다.");
    } else {
      setIsUsername(false);
      setUsernameMsg("이메일 형식이 틀렸습니다. 다시 확인해주세요");
    }
    setUsername(event.target.value);
  };

  const onChangeNickname = (event) => {
    if (event.target.value.length < 2) {
      setIsNickname(false);
      setNicknameMsg("아이디는 2글자 이상으로 입력해주세요.");
    } else {
      setIsNickname(true);
      setNicknameMsg("올바른 아이디 형식입니다.");
    }
    setNickname(event.target.value);
  };

  const onChangePassword = (event) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (event.target.value) {
      setIsPassword(true);
      setPasswordMsg("올바른 비밀번호 형식입니다.");
      setPassword(event.target.value);
    } else {
      setIsPassword(false);
      setPasswordMsg("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요");
    }
  };

  const onChangePasswordConfirm = (event) => {
    if (password === event.target.value) {
      setIsPasswordConfirm(true);
      setPasswordConfirmMsg("동일한 비밀번호입니다.");
    } else {
      setIsPassword(false);
      setPasswordConfirmMsg("비밀번호가 다릅니다.");
    }
    setPasswordConfirm(event.target.value);
  };

  const validation = () => {
    if (username) setIsUsername(true);
    if (nickname) setIsNickname(true);
    if (password) setIsPassword(true);
    if (passwordConfirm) setIsPasswordConfirm(true);

    if (
      username &&
      nickname &&
      password &&
      passwordConfirm &&
      isUsername &&
      isNickname &&
      isPassword &&
      isPasswordConfirm
    ) {
      return true;
    } else {
      return false;
    }
  };

  console.log(password.length);

  const onSubmit = async () => {
    // if (validation()) {
    try {
      const data = await axios.post("http://g10000.shop/api/member/signup", {
        username,
        nickname,
        password,
        profileImage: null,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    //   alert("회원 가입 완료하였습니다!!");
    setUsername("");
    setNickname("");
    setPassword("");
    return;
  };
  //     else {
  //       alert("입력 정보를 다시 확인하세요!!");

  //     }
  //   };

  return (
    <div className="App">
      <StSignUP>
        <div style={{ textAlign: "right", margin: "0px" }}>
          <StBtnX>X</StBtnX>
        </div>
        <h2 style={{ textAlign: "left", marginTop: "0px" }}>가입하기</h2>

        <StForm>
          <div>
            <StinputImg />
            <StInput
              style={{ width: "200px" }}
              type="file"
              placeholder="profile image"
            />
          </div>
          <div>
            <StInput
              onChange={onChangeUsername}
              name="username"
              type="email"
              placeholder="e-mail"
            />
            <StMsg>
              {username.length > 0 && (
                <span className={`message ${isUsername ? "success" : "error"}`}>
                  {usernameMsg}
                </span>
              )}
            </StMsg>

            <StInput
              onChange={onChangeNickname}
              name="nickname"
              type="text"
              placeholder="nickname"
            />
            <StMsg>
              {nickname.length > 0 && (
                <span className={`message ${isNickname ? "success" : "error"}`}>
                  {nicknameMsg}
                </span>
              )}
            </StMsg>

            <StInput
              onChange={onChangePassword}
              name="password"
              type="password"
              placeholder="password"
            />
            <StMsg>
              {password.length > 0 && (
                <span className={`message ${isPassword ? "success" : "error"}`}>
                  {passwordMsg}
                </span>
              )}
            </StMsg>

            <StInput
              onChange={onChangePasswordConfirm}
              name="passwordConfirm"
              type="password"
              placeholder="password confirm"
            />
            <StMsg>
              {passwordConfirm.length > 0 && (
                <span
                  className={`message ${
                    isPasswordConfirm ? "success" : "error"
                  }`}
                >
                  {passwordConfirmMsg}
                </span>
              )}
            </StMsg>
          </div>
        </StForm>

        <div className="signup">
          <div style={{ padding: "10px" }}></div>
          <StBtn
            onClick={onSubmit}
            style={{
              color: "white",
              backgroundColor: "#49C530",
              margin: "10px 50px",
            }}
          >
            sign up
          </StBtn>
        </div>
      </StSignUP>
    </div>
  );
}

export default SignUp;

const StSignUP = styled.div`
  display: flex;
  width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 30px 30px 50px;
  text-align: center;
  background-color: white;
  border-radius: 9px;
  position: absolute;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const StBtnX = styled.button`
  background-color: white;
  position: relative;
  text-align: center;
  margin: 0px;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  border: none;
`;

const StForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StInput = styled.input`
  position: relative;
  width: 300px; //props로 수정가능한 값으로 만들기
  height: 40px;
  background: #f5f6f7;
  border-radius: 6px;
  border: none;
  padding-left: 20px;
  font-size: 17px;
  margin: 5px;
`;

const StinputImg = styled.input`
  width: 50px;
  height: 50px;
  border-radius: 70%;
  margin-bottom: 20px;
`;

const StBtn = styled.button`
  padding: 10px;
  margin: 10px 15px 10px 15px;
  width: 200px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  border: none;
`;
const StMsg = styled.div`
  text-align: left;
  padding-left: 20px;
  font-weight: 0;
  font-size: 0.8rem;
  line-height: 24px;
  letter-spacing: -1px;
  position: relative;
  top: -5px;
  bottom: -10px;
  left: 0;
`;
