import React, { useRef, formData, useState, useEffect } from "react";
import styled from "styled-components";
import { RiImageAddFill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImgUploadModal = () => {
  const navigate = useNavigate();
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
    // fd.append("변수명",input 값)

    //여기서 보내준다.
    await axios
      .post(`https://f1rstweb.shop/posts`, fd, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        navigate("/main");
        console.log(response);
        if (response.data) {
        }
      })
      .catch((error) => {
        alert("error");

        navigate("/main");
      });
  };

  return (
    <>
      <StContainer>
        <StBoxWrap>
          <StBoxTop>
            <StStBoxTopInner>
              {/* <div>새 게시물 올리기</div> */}
              <AiOutlineCloseCircle className="iconUploadClose" />
            </StStBoxTopInner>
          </StBoxTop>

          <StBox>
            <StForm
              onSubmit={(e) => {
                e.preventDefault();
                onWriteHandler();
              }}
            >
              <StLeftBox>
                {/* <RiImageAddFill className="iconUpload" /> */}
                <div>
                  {/* <span>사진을 올려보세요</span> */}
                  <StInnerBox>
                    {imgBase64.map((item) => {
                      return (
                        <img
                          className="
                      m-auto
                      "
                          key={Date.now()}
                          src={item}
                          alt="First slide"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      );
                    })}
                  </StInnerBox>
                </div>
              </StLeftBox>

              <StRightBox>
                <StRightBoxTop>아이디</StRightBoxTop>
                <StRightBoxContent>
                  <textarea name="body" rows="19" maxLength={2000} />
                </StRightBoxContent>
                <StRightBoxBt>
                  <StFileBox>
                    <StInput
                      className="uploadInput"
                      type="file"
                      id="image"
                      accept="image/jpg,image/png,image/jpeg,image/gif"
                      onChange={handleChangeFile}
                      multiple="multiple"
                    />
                    <StLabel htmlFor="image">사진선택</StLabel>
                    <StButton>공유하기</StButton>
                  </StFileBox>
                </StRightBoxBt>
              </StRightBox>
            </StForm>
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
  width: 630px;
  height: 42px;
`;

const StStBoxTopInner = styled.div`
  /* display: flex; */
`;

const StBox = styled.div`
  border: 2px solid gray;
  border-radius: 0 0 20px 20px;
  width: 630px;
  height: 500px;
  & span {
    font-size: 20px;
    margin-top: 12px;
    font-weight: 500;
  }
`;

const StForm = styled.form`
  display: flex;
  width: 630px;
  height: 500px;
`;

const StLeftBox = styled.div`
  border: 1px solid gray;
  border-radius: 0 0 0 20px;
  width: 400px;
  height: 500px;
  position: relative;
`;

const StInnerBox = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  width: 390px;
  height: 490px;
  position: absolute;
`;

const StRightBox = styled.div`
  /* border: 1px solid blue; */
  width: 230px;
`;

const StRightBoxTop = styled.div`
  /* border: 1px solid blue; */
  height: 40px;
`;

const StRightBoxContent = styled.div`
  /* border: 1px solid blue; */
  height: 300px;
`;

const StRightBoxBt = styled.div`
  /* border: 1px solid blue; */
`;

const StButton = styled.button`
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 32px;
  font-size: 15px;
  font-weight: 500;
  background-color: #298dff;
  color: white;
  margin: 5px;
  cursor: pointer;
`;

const StFileBox = styled.div`
  width: 230px;
  height: 100px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLabel = styled.label`
  border: none;
  border-radius: 10px;
  width: 100px;
  height: 32px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  background-color: #298dff;
  color: white;
  cursor: pointer;
  line-height: 33px;
`;

const StInput = styled.input`
  display: none;
`;
export default ImgUploadModal;
