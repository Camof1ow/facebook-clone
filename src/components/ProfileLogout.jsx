import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getUserData, removeCookieToken, removeUserData } from "../storage/Cookie";

function ProfileLogout(){
    const myProfile = getUserData();

    const logout = () => {
        removeCookieToken();
        removeUserData();
        window.location.href = "/login";
      };

    return(
      <ProfileToggle>
        <div>
          <div style={{marginBottom: "19px"}}>
            <div style={{textAlign: "center", fontSize: "26px", fontWeight: "bold", textDecoration: "underline"}}>Hello! {myProfile.nickname}님</div>
          </div>
          
           <List><img src={"https://cdn-icons-png.flaticon.com/512/3884/3884429.png"} width="13%" 
           style={{cursor: "pointer", marginBottom: "-4px"}}/><span style={{marginLeft:"4px"}}>설정 및 개인정보</span></List>
          <List><img src={"https://cdn.icon-icons.com/icons2/1769/PNG/512/4115235-exit-logout-sign-out_114030.png"} 
          width="13%" style={{cursor: "pointer", marginBottom: "-4px"}}
          onClick={()=>{logout()}}/><span style={{marginLeft:"4px", marginTop: "0px"}}>로그아웃</span></List>
        </div>
      </ProfileToggle>
    )
  }

export default ProfileLogout;

const List = styled.div`
  padding: 1rem;
  font-size: 20px;
`;

const ProfileToggle = styled.div`
  top: 74px;
  right: 20px;
  padding: 20px;
  width: 250px;
  height: 180px;
  background: white;
  border-radius: 15px;
  float: right;
  position: fixed;
  z-index: 3;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

