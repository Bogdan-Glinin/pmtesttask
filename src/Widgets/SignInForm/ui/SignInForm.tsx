import { Button, Input } from "antd";
import { Content } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { showErrorNotification } from "../../../Shared/lib/notifications/Notification";
import Cookies from "js-cookie";
import { authSomeUser } from "../model/service/authUser";
import { encryptData } from "../../../Shared/lib/jwt/jsonwebtoken";

const SignInform = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [authUser, { data }] = authSomeUser(login, password);

  const signIn = () => {
    authUser();
  };

  useEffect(() => {
    if (data?.error) {
      showErrorNotification(["Ошибка при запросе"]);
    } else if (data?.allUsers?.length === 1) {
      Cookies.set("userId", encryptData(data.allUsers[0].id));
      navigate("/profile", { replace: true });
    } else if (data?.allUsers?.length === 0) {
      showErrorNotification(["Пользователь не найден"]);
    }
  }, [data, navigate]);

  return (
    <Content
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        style={{
          width: 400,
          height: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Введите логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input.Password
          placeholder="Ввидите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{ margin: "0 auto" }} onClick={signIn} type="primary">
          Войти
        </Button>
      </Form>
    </Content>
  );
};

export default SignInform;
