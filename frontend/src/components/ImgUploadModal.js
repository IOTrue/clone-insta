import React, { useRef, formData, useState, useEffect } from "react";
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __postFormData } from "../redux/modules/imgUploadSlice";
import axios from "axios";

const ImgUploadModal = () => {
  // const [files, setFiles] = useState("");
  const token = localStorage.getItem("token");
  // console.log(token);

  //이미지 미리보기와 파일첨부 기능
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  //미리보기
  const handleChangeFile = (event) => {
    setImgFile(event.target.files);
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };

  const onWriteHandler = async () => {
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("image", file));

    await axios.post(`http://f1rstweb.shop/posts`, fd, {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    });
    // .then((response) => {
    //   console.log(response);
    //   if (response.data) {
    //   }
    // })
    // .catch((error) => {});
    // navigate("/List");
  };

  return (
    <>
      <StContainer>
        <StBoxWrap>
          <StBoxTop>
            <AiOutlineCloseCircle className="iconUploadClose" />
          </StBoxTop>
          <StBox>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onWriteHandler();
              }}
            >
              <RiImageAddFill className="iconUpload" />
              <div>
                <span>업로드된 이미지</span>
                <div>
                  {imgBase64.map((item) => {
                    return (
                      <img
                        className="
                      m-auto
                      "
                        key={Date.now()}
                        src={item}
                        alt="First slide"
                        style={{ width: "40%", height: "40%" }}
                      />
                    );
                  })}
                </div>
              </div>
              <span>사진을 올려보세요.</span>

              <input
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={handleChangeFile}
                multiple="multiple"
              />
              <label htmlFor="imgae">파일선택하기</label>
              <StButton>저장하기</StButton>
            </form>
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
