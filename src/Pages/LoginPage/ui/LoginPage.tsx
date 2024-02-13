import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import BackButton from "../../../Shared/ui/backButton/BackButton";
import { Radio } from "antd";
import { memo, useState } from "react";
import { SignInform } from "../../../Widgets/SignInForm";
import { SignUpForm } from "../../../Widgets/SignUpForm";
import styled from "styled-components";

const StyledHeader = styled(Header)`
text-align: center;
color: #fff;
height: 64px;
padding-inline: 48px;
line-height: 64px;
background-color: #4096ff;
width: 100%;
font-size: 30px;
display: flex;
margin-bottom: 20px;
align-items: center;
`

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const StyledLayout = styled(Layout)`
  width: 500px;
  background-color: #fff;
`

const Login = () => {

  const [type, setType] = useState("signIn");

  const options = [
    {
      label: "Вход в систему",
      value: "signIn",
    },
    {
      label: "Регистрация",
      value: "signUp",
    },
  ];

  return (
    <StyledContainer>
      <StyledLayout>
        <StyledHeader>
          <BackButton />
          <Radio.Group
            options={options}
            onChange={(e) => setType(e.target.value)}
            value={type}
            optionType="button"
          />
        </StyledHeader>
        {type === "signIn" ? <SignInform /> : <SignUpForm/>}
      </StyledLayout>
    </StyledContainer>
  );
};

export default memo(Login);
