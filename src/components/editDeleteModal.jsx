import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getAllCommentsById } from "../redux/modules/commentSlice";
import { deleteFbPost } from "../redux/modules/postSlice";
import CommentList from "./CommentList";
import EditModal from "./EditModal";
import moment from "moment";
import "moment/locale/ko";
import { getUserData } from "../storage/Cookie";

function EditDelete({ tg, posts }) {
  const dispatch = useDispatch();

  const id = posts.posts.id;

  const onDeletePost = () => {
    dispatch(deleteFbPost(Number(id)));
  };

  let [editDelete, setEditDelete] = useState(false);

  const [EditToggle, setEditToggle] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);

  return (
    <EditDeleteDiv>
      <StButton style={{ color: "red" }} onClick={onDeletePost}>
        delete
      </StButton>
      <StButton style={{ color: "blue" }} onClick={() => tg(true)}>
        edit
      </StButton>
    </EditDeleteDiv>
  );
}

export default EditDelete;

const EditDeleteDiv = styled.div`
  /* padding: 5px 15px;
  margin: auto; */
  margin-right: 5px;
  float: right;
  background-color: #c1c2c3;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const StButton = styled.button`
  border: none;
  background-color: white;
  padding: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;
