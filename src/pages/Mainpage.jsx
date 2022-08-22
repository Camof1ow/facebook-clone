import styled from "styled-components";
import FriendsList from "../components/FriendsList";
import Header from "../components/Header";
import InputPostbox from "../components/InputPostbox";

import PostList from "../components/PostList";

function Mainpage() {
  return (
    <Global>
      <Header></Header>

      <GlobalStyle>
        <LeftSidePosts>
          <InputPostbox />
          <PostList />
        </LeftSidePosts>
        <FriendsList />
      </GlobalStyle>
    </Global>
  );
}

const Global = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const GlobalStyle = styled.div`
  background-color: #f1f2f5;
  height: 100vh;
  display: flex;
`;

const LeftSidePosts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mainpage;
