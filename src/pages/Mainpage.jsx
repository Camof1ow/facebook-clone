import styled from "styled-components";
import FriendsList from "../components/FriendsList";
import Header from "../components/Header";
import InputPostbox from "../components/InputPostbox";
import PostCard from "../components/PostCard";
import SearchList from "../components/SearchList";

function Mainpage() {
  return (
    <Global>
      <Header></Header>

      <GlobalStyle>
        <PostLists>
          <InputPostbox />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </PostLists>
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
  height: auto;
  display: flex;
`;

const PostLists = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Mainpage;
