import styled from "styled-components";
import facebookLogo from "../img/facebook-logo.png";
import SearchList from "./SearchList";

function Header() {
  return (
    <HeaderDiv>
      <FBlogo src={facebookLogo}></FBlogo>
      <Searchbox>
        <SearchInput placeholder="search friends" />
      </Searchbox>

      <MyProfileImg />
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
  font-size: 20px;
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
