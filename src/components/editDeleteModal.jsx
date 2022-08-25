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

function EditDelete({tg, posts}) {
  const dispatch = useDispatch();

  const id = posts.posts.id;

  const onDeletePost = () => {
    dispatch(deleteFbPost(Number(id)));
  };

  let [editDelete, setEditDelete] = useState(false);

  const [EditToggle, setEditToggle] = useState(false);
  const [commentToggle, setCommentToggle] = useState(false);

  const onGetComment = () => {
    setCommentToggle(!commentToggle);
    if (commentToggle === false) {
      dispatch(getAllCommentsById(id));
    }
  };

  const userinfo = getUserData();

      if (userinfo.userId === posts.posts.member.id) {
        return(
        <editDelete>
          <StButton style={{ color: "red" }} onClick={onDeletePost}>
            delete
          </StButton>
          <StButton
            style={{ color: "blue" }}
            onClick={() => tg(true)}
          >
            edit
          </StButton>
        </editDelete>)}
        else{return (null)}
      }

export default EditDelete;

const PostContainer = styled.div`
  width: 620px;

  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

const PostTop = styled.div`
  justify-content: space-between;
  display: flex;
`;

const PostTopLeft = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const PostProfileImgDiv = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: #7b83c7;
`;

const PostProfileImg = styled.img`
  width: 100%;
`;
const PostInfo = styled.div`
  margin-left: 15px;
`;

const PostContent = styled.div`
  margin-left: 12px;
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
`;

const PostContentImgDiv = styled.div`
  width: 620px;
  overflow: hidden;
`;

const PostContentImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LikeComment = styled.div`
  box-shadow: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 10px;
  margin-top: 2px;
`;

const ButtonContainer = styled.div`
  box-shadow: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  margin-top: 10px;
  border-top: 1px solid #d1d2d3;
`;

const editDelete = styled.div`
  padding: 5px 15px;
  margin: auto;
  width: 350px;
`;

const StButton = styled.button`
  border: none;
  background-color: white;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
`;


