import styled from "styled-components";

function FriendsList() {
  return (
    <StFriendsList>
      <h3 style={{ marginBottom: "10px" }}>Friends</h3>
      <StFriend>
        <StFriendImgDiv>
          <StFriendImg />
        </StFriendImgDiv>
        <StFriendName>Kim Sparta</StFriendName>
      </StFriend>
    </StFriendsList>
  );
}

export default FriendsList;

const StFriendsList = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  width: 300px;
  margin-right: 1%;
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

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
