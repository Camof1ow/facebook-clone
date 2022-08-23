import styled from "styled-components";

export const ModalLayer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  min-width: 700px;
  //max-width: 1300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;

  /* 
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px; */
`;

export const ModalDiv = styled.div`
  width: 500px;
  height: 50%;
  padding: 10px;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  z-index: 3;
  background: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
