import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import facebookLogo from "../img/facebook-logo.png";
import { searchFriend } from "../redux/modules/searchSlice";
import { getUserData } from "../storage/Cookie";
import SearchList from "./SearchList";

function Header() {
  const myProfile = getUserData();

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  const onSearchInput = (e) => {
    const searchValue = e.target.value;

    if (searchValue === "") {
      setSearchToggle(false);
    } else {
      dispatch(searchFriend(searchValue));
      setSearchToggle(true);
    }
  };

  const onSearch = () => {};

  return (
    <HeaderDiv>
      <FBlogo src={facebookLogo}></FBlogo>
      <Searchbox>
        <SearchInput
          // value={searchInput}
          onChange={(e) => onSearchInput(e)}
          placeholder="search friends"
        />
      </Searchbox>
      {searchToggle === true ? <SearchList /> : null}
      <MyProfileImg src={myProfile.profileImage} />
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div`
  background-color: #fff;

  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  position: sticky;
`;

const FBlogo = styled.img`
  position: absolute;
  width: 50px;
  height: 50px;
  left: 23px;
  top: 13px;
`;

const SearchInput = styled.input`
  position: absolute;
  width: 357px;
  height: 50px;
  left: 97px;
  top: 17px;

  background: #f1f2f5;
  border-radius: 33px;
  border: none;

  padding-left: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
`;

const Searchbox = styled.div``;

const MyProfileImg = styled.img`
  position: relative;
  width: 50px;
  height: 50px;
  right: 24px;
  top: 13px;
  border-radius: 100%;
  background: #7b83c7;
  float: right;
`;

export default Header;
