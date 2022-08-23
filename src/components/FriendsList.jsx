import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { __getFriends } from "../redux/modules/friendsSlice";
import Friends from "./Friends";

function FriendsList() {
  const dispatch = useDispatch();

  const {friends, isLoading, error} = useSelector((state)=>state.friends);
  console.log(friends)

  useEffect(() => {
    dispatch(__getFriends());
  },[dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
  
  return (
    <StFriendsList>
      <h3 style={{ marginBottom: "10px" }}>Friends</h3>
      <button onClick={()=>{dispatch(__getFriends())}}>Dispatch</button>
      <Friends/>
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

