import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { showErrorNotification } from "../../../Shared/lib/notifications/Notification";
import { encryptData } from "../../../Shared/lib/jwt/jsonwebtoken";
import Cookies from "js-cookie";
import { Content } from "antd/es/layout/layout";
import { Button, Input, Select } from "antd";
import { createUser } from "../model/service/createUser"
import { validationSignUp } from "../lib/validation";
import { ValidationError } from "yup";
import { useLazyQuery } from "@apollo/client";
import { CHECK_USER_EXIST } from "../../../Shared/config/users";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [signUpUser, { data: signUpData }] = createUser({
    name,
    role,
    login,
    password,
  });
  const [checkUser] = useLazyQuery(CHECK_USER_EXIST, {
    variables: {
      login,
    },
  });

  const signUp = async () => {
    try {
      validationSignUp.validateSync(
        {
          name,
          role,
          login,
          password,
        },
        { abortEarly: false }
      );
  
      const { data: checkUserData } = await checkUser();

      if (checkUserData?.allUsers?.length) {
        showErrorNotification(["email занят"]);
        return;
      }
  
      await signUpUser();
  
    } catch (error) {
      if (error instanceof ValidationError) {
        showErrorNotification(error.errors);
      } else {
        showErrorNotification(["Ошибка при запросе"]);
      }
    }
  };
  

  useEffect(() => {
    if (signUpData?.error) {
      showErrorNotification(["Ошибка при запросе"]);
    } else if (signUpData?.createUser) {
      // console.log(data);
      Cookies.set("userId", encryptData(signUpData.createUser.id));
      navigate("/profile", { replace: true });
    }
  }, [signUpData, navigate]);

  const options = [
    {
      value: "librarian",
      label: "Библиотекарь",
    },
    {
      value: "reader",
      label: "Читатель",
    },
  ];

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
          height: 200,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Select
          style={{ width: 400 }}
          onChange={(e) => setRole(e)}
          options={options}
        />
        <Input
          placeholder="Введите email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Input.Password
          placeholder="Ввидите пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{ margin: "0 auto" }} onClick={signUp} type="primary">
          Зарегистрироваться
        </Button>
      </Form>
    </Content>
  );
};

export default SignUpForm;
