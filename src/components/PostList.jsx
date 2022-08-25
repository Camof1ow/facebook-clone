import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getFbPostLists } from "../redux/modules/postSlice";
import PostCard from "./PostCard";

function PostList() {
  const dispatch = useDispatch();

  const { isLoading, error, facebookPosts } = useSelector(
    (state) => state.facebookPosts
  );

  useEffect(() => {
    dispatch(getFbPostLists());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>error: </h1>
      </div>
    );
  }

  console.log(facebookPosts);
  return (
    <PostLists>
      {facebookPosts.map((f, i) => (
        <PostCard posts={f} i={i} />
      ))}

      {/* <PostCard /> */}
    </PostLists>
  );
}

const PostLists = styled.div``;

export default PostList;
