import React, { useState, useEffect } from "react";
import { CommonInput, PhoneInput, EmailInput } from "../joininput/JoinInput";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import checkOnIcon from "../../../assets/icon/icon-check-on.svg";
import checkOffIcon from "../../../assets/icon/icon-check-off.svg";
import {
  fetchPostUserName,
  fetchPostJoin,
  getNameStatus,
  getNameMessage,
  getJoinStatus,
  getJoinError,
  getJoinUserType,
  JoinDataForm,
  resetAll,
  resetName,
} from "../../../features/joinSlice";
import { useAppDispatch, useAppSelector } from "../../../hook/hooks";
import { CommonBtn } from "../../common/button/ButtonStyle";
import { CheckBoxInput } from "../../common/checkbox/CheckBoxInput";
import styled from "styled-components";

const JoinWraaper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Joinform = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const JoinInputBox = styled.div`
  width: 550px;
  /* height : 920px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgb(128, 128, 128);
  border-radius: 10px;
  padding: 40px 0;
`;

const AgreeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 50px 0;
  span {
    color: rgb(169, 169, 169);
  }
  span + Link {
    font-weight: 700;
    text-decoration: underline;
  }
`;

export default function JoinInputForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userType = useAppSelector(getJoinUserType);

  const nameStatus = useAppSelector(getNameStatus);
  const joinStatus = useAppSelector(getJoinStatus);
  const joinError = useAppSelector(getJoinError);

  const nameMessage = useAppSelector(getNameMessage);

  //정보 객체 생성
  const initialValues = {
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    email1: "",
    email2: "",
    checkBox: false,
  };

  //에러 메세지 객체 생성
  const initialError = {
    username: "",
    password: "",
    checkPassword: "",
    name: "",
    phone: "",
    email: "",
    companyRegistrationNumber: "",
  };

  //아이디 중복 확인 버튼
  const [onUsernameBtn, setOnUsernameBtn] = useState(false);

  //유저 정보 상태
  const [userFormValue, setUserFormValue] = useState(initialValues);

  //에러 메세지 상태
  const [errorMessage, setErrorMessage] = useState(initialError);

  useEffect(() => {
    //가입 하기 버튼 클릭후 성공 or 실패 경우
    if (joinStatus === "succeeded") {
      alert("가입이 완료되었습니다 :)");
      dispatch(resetAll());
      navigate("/account/login");
    } else if (joinStatus === "failed") {
      alert(joinError);
      userFormValue.checkBox = false;
    }
  }, [dispatch, joinError, joinStatus, navigate, userFormValue]);

  //아이디 중복확인 함수
  const checkUserNameVaild = (username: string) => {
    dispatch(fetchPostUserName(username));
  };

  //아이디 변경 함수
  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (nameStatus !== "idle") {
      dispatch(resetName());
    } else {
      const { name, value } = e.target;
      const message =
        "* 아이디는 3-20자 이내의 영어 소문자, 대문자, 숫자만 가능합니다.";
      const usernameRegExp = "^[A-Za-z0-9]{3,20}$";

      if (value.match(usernameRegExp)) {
        setUserFormValue({ ...userFormValue, [name]: value });
        setErrorMessage({ ...errorMessage, [name]: "" });
        setOnUsernameBtn(true);
      } else {
        setUserFormValue({ ...userFormValue, [name]: value });
        setErrorMessage({ ...errorMessage, [name]: message });
        setOnUsernameBtn(false);
      }
    }
  };

  //패스워드 변경 함수
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 비밀번호는 영문, 숫자 조합 8-20자리를 입력해주세요.";
    const passwordRegExp = "^[A-Za-z0-9]{8,20}$";

    if (value.match(passwordRegExp)) {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: "" });
    } else {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: message });
    }
  };

  //패스워드 재확인 변경 함수
  const onChangeCheckPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 비밀번호가 일치하지 않습니다.";

    if (value.length > 0 && value === userFormValue.password) {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: "" });
    } else {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: message });
    }
  };

  //이름 변경 함수
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 이름은 한글 혹은 영어로 10자리까지 가능합니다.";
    const nameRegExp = "^[ㄱ-ㅎ가-힣a-zA-Z]{1,10}$";

    if (value.match(nameRegExp)) {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: "" });
    } else {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, [name]: message });
    }
  };

  //핸드폰 버튼 함수 - phone1 값 변경
  const onClickPhone = (selected: string) => {
    setUserFormValue({ ...userFormValue, phone1: selected });
  };

  //핸드폰 변경 함수
  const onChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 휴대폰번호 형식을 확인해주세요.";
    const phoneRegExp = "^[0-9]{3,4}$";

    if (value.match(phoneRegExp)) {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, phone: "" });
    } else {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, phone: message });
    }
  };

  //이메일 변경 함수
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const message = "* 이메일 형식을 확인해주세요.";
    const email1RegExp = "^[a-zA-Z0-9]*$";
    const email2RegExp =
      "([a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.([cC][oO][mM]))(:[0-9]{1,5})?";

    const regExp = name === "email1" ? email1RegExp : email2RegExp;
    if (value.match(regExp)) {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, email: "" });
    } else {
      setUserFormValue({ ...userFormValue, [name]: value });
      setErrorMessage({ ...errorMessage, email: message });
    }
  };

  //체크 박스 확인
  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormValue({ ...userFormValue, checkBox: e.target.checked });
  };

  //회원가입 제출하기
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameStatus !== "succeeded") {
      alert("아이디 인증을 완료해 주세요.");
      return;
    }

    const { username, password, checkPassword, name, phone1, phone2, phone3 } =
      userFormValue;
    let userData: JoinDataForm = {
      username: username,
      password: password,
      password2: checkPassword,
      phone_number: `${phone1}${phone2}${phone3}`,
      name: name,
    };
    console.log(userData);
    dispatch(fetchPostJoin({ userType, userData }));
  };

  return (
    <JoinWraaper>
      <Joinform onSubmit={onSubmit}>
        <JoinInputBox>
          <CommonInput
            label="아이디"
            type="text"
            name="username"
            onButton={onUsernameBtn}
            width="346px"
            onChange={onChangeUsername}
            value={userFormValue.username}
            onClick={checkUserNameVaild}
            error={nameMessage || errorMessage.username}
          />
          <CommonInput
            label="비밀번호"
            type="password"
            name="password"
            onChange={onChangePassword}
            error={errorMessage.password}
            icon={
              userFormValue.password.length > 0 && errorMessage.password === ""
                ? checkOnIcon
                : checkOffIcon
            }
            value={userFormValue.password}
          />
          <CommonInput
            label="비밀번호 재확인"
            type="password"
            name="checkPassword"
            onChange={onChangeCheckPassword}
            error={errorMessage.checkPassword}
            icon={
              userFormValue.checkPassword.length > 0 &&
              errorMessage.checkPassword === ""
                ? checkOnIcon
                : checkOffIcon
            }
            value={userFormValue.checkPassword}
          />
          <CommonInput
            label="이름"
            type="text"
            name="name"
            onChange={onChangeName}
            error={errorMessage.name}
            value={userFormValue.name}
          />
          <PhoneInput
            onChange={onChangePhoneNumber}
            onClick={onClickPhone}
            value1={userFormValue.phone1}
            value2={userFormValue.phone2}
            value3={userFormValue.phone3}
            error={errorMessage.phone}
          />
          <EmailInput
            onChange={onChangeEmail}
            value1={userFormValue.email1}
            value2={userFormValue.email2}
            error={errorMessage.email}
          />
        </JoinInputBox>
        <AgreeWrapper>
          <CheckBoxInput
            onChange={onChangeCheckbox}
            checked={userFormValue.checkBox}
            children={undefined}
          />
          <span>
            아시아전기의&nbsp;
            <Link to="/">이용약관</Link> 및<Link to="/"> 개인정보처리방침</Link>
            에 대한 내용을 확인하였고 동의합니다.
          </span>
        </AgreeWrapper>
        <CommonBtn type="submit" style={{ marginTop: "10px" }}>
          가입하기
        </CommonBtn>
      </Joinform>
    </JoinWraaper>
  );
}
