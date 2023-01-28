import React from "react";
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImgUploadModal = () => {
  return (
    <>
      <StContainer>
        <StBoxWrap>
          <StBoxTop>
            <AiOutlineCloseCircle className="iconUploadClose" />
          </StBoxTop>
          <StBox>
            <RiImageAddFill className="iconUpload" />
            <span>사진을 올려보세요.</span>
            <StButton>컴퓨터에서 선택</StButton>
          </StBox>
        </StBoxWrap>
      </StContainer>
    </>
  );
};

const StContainer = styled.div`
  /* border: 1px solid; */
  width: 100vh;
  height: 100vh;
  margin: auto;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StBoxWrap = styled.div`
  /* border: 1px solid; */
  width: 800px;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StBoxTop = styled.div`
  border: 2px solid gray;
  border-bottom-style: none;
  border-radius: 20px 20px 0 0;
  width: 625px;
  height: 42px;
`;

const StBox = styled.div`
  border: 2px solid gray;
  border-radius: 0 0 20px 20px;
  width: 625px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & span {
    font-size: 20px;
    margin-top: 12px;
    font-weight: 500;
  }
`;

const StButton = styled.div`
  border: none;
  border-radius: 10px;
  width: 120px;
  height: 32px;
  font-size: 17px;
  font-weight: 500;
  background-color: #298dff;
  color: white;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;
export default ImgUploadModal;
