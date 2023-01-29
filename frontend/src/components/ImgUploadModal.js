import React, { useRef, formData } from "react";
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ImgUploadModal = () => {
  const inputRef = useRef();
  const formData = new FormData();

  const onImgInputBtnClick = (event) => {
    event.prenventDefault();
    inputRef.current.click();
    // inputRef.current.disabled = false;
    // inputRef.current.focus();
  };
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
            <StButton onClick={onImgInputBtnClick}>컴퓨터에서 선택</StButton>
            <input
              disabled
              ref={inputRef}
              type="file"
              accept="image/*"
              name="file"
              className="imgInput"
            />
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

const StButton = styled.button`
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

export default ImgUploadModal;
