import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { idCheck, pwCheck } from "../shared/regExp";
import { __loginUser } from "../redux/modules/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("git");

  const user = useSelector((state) => state);
  // const isLogin = useSelector((store) => store.user.is_login);
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

  // const { data, error } = useSelector((state) => state.loginSlice);
  // const state = useSelector((state) => state.loginSlice);
  // console.log("login state : ", state);
  // const [loginState, setLoginState] = useState(false);

  const onSubmitLogin = async (event) => {
    event.preventDefault();
    console.log("userId는", userId);
    console.log("userPw는", userPw);
    //유효성 검사
    if (idCheck === false && pwCheck === false) return false;
    const user = {
      // id: Date.now(),
      email: userId,
      password: userPw,
    };
    console.log("user", user);
    dispatch(__loginUser(user));
  };
  console.log("help");
  return (
    <>
      <StContainer>
        <StMain>
          <div>Logo</div>
          <StForm onSubmit={onSubmitLogin}>
            <StInputWrap>
              <StInput
                type="email"
                placeholder="이메일"
                onChange={(e) => setUserId(e.target.value)}
                value={userId}
                onBlur={() => {
                  idCheck(userId);
                }}
              />
              <StInput
                placeholder="비밀번호"
                onChange={(e) => setUserPw(e.target.value)}
                value={userPw}
                onBlur={() => {
                  pwCheck(userPw);
                }}
              />
              <StButton>로그인</StButton>
            </StInputWrap>
          </StForm>
          <StPassword>비밀번호를 잊으셨나요?</StPassword>
        </StMain>
        <StSignUpBox>
          계정이 없으신가요?<span style={{ color: "#5252d4" }}>가입하기</span>
        </StSignUpBox>
      </StContainer>
    </>
  );
};

export default Login;

const StContainer = styled.div`
  border: 2px solid #d2d2d2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  height: 100vh;
  background-color: #f4f4f4;
`;

const StMain = styled.div`
  border: 2px solid #d2d2d2;
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 10px;
  background-color: white;
`;

const StInputWrap = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StForm = styled.form``;

const StPassword = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #141467;
`;

const StInput = styled.input`
  box-sizing: border-box;
  border: 1px solid gray;
  background-color: #f3f3f3;
  width: 268px;
  height: 36px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
`;

const StButton = styled.button`
  border: 1px solid;
  border-radius: 8px;
  width: 268px;
  height: 35px;
  background-color: #298dff;
  color: white;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #3e3ea9;
  }
`;

const StSignUpBox = styled.div`
  border: 2px solid #d2d2d2;
  width: 350px;
  height: 63px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  background-color: white;
`;
