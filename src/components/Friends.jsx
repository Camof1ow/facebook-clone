import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __getFriends } from "../redux/modules/friendsSlice";

function Friends({friends}) {
  const dispatch = useDispatch();


  return (
      <StFriend>
        <StFriendImgDiv>
          <StFriendImg />
        </StFriendImgDiv>
        <StFriendName>Kim Sparta</StFriendName>
      </StFriend>
  );
}

export default Friends;

const StFriend = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.3s ease-in-out;
  border-radius: 5px;
  padding: 7px 10px;
  color: #333;
`;

const StFriendImgDiv = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: #7b83c7;
`;

const StFriendImg = styled.img`
  width: 100%;
  background: #7b83c7;
`;

const StFriendName = styled.p`
  font-size: 18px;
  cursor: pointer;
  margin-left: 8px;
`;


