import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import BackButton from "../../../Shared/ui/backButton/BackButton";
import { Radio } from "antd";
import { memo, useState } from "react";
import { SignInform } from "../../../Widgets/SignInForm";
import { SignUpForm } from "../../../Widgets/SignUpForm";

const Login = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
    width: "100%",
    fontSize: 30,
    display: "flex",
    marginBottom: 20,
    alignItems: "center",
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

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
    <div style={containerStyle}>
      <Layout style={{ width: 500, backgroundColor: "#fff" }}>
        <Header style={headerStyle}>
          <BackButton />
          <Radio.Group
            options={options}
            onChange={(e) => setType(e.target.value)}
            value={type}
            optionType="button"
          />
        </Header>
        {type === "signIn" ? <SignInform /> : <SignUpForm/>}
      </Layout>
    </div>
  );
};

export default memo(Login);
