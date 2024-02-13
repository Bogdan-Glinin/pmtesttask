import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Button, List } from "antd";
import BackButton from "../../../Shared/ui/backButton/BackButton";
import { getUser } from "../model/service/getUserData";
import { decryptData } from "../../../Shared/lib/jwt/jsonwebtoken";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

const SyledH3 = styled.h3`
  text-align: center;
  width: 80%;
`;

const StyledList = styled(List)`
  width: 500px;
`

const Profile = () => {
  const navigate = useNavigate();

  let userId = null;

  if (Cookies.get("userId")) {
    //@ts-ignore
    userId = decryptData(Cookies.get("userId"));
  }

  const [getUserData, { loading, error, data }] = getUser(userId);

  const logout = () => {
    Cookies.remove("userId");
    navigate("/login", { replace: true });
  };

  interface profileDataSchema {
    title: string;
  }

  let [profileData, setProfileData] = useState<profileDataSchema[]>([]);

  const setData = () => {
    setProfileData([
      {
        title: `Имя: ${data.User.name}`,
      },
      {
        title: `Почта: ${data.User.login}`,
      },
      {
        title: `Роль: ${data.User.role}`,
      },
    ]);
  };

  useEffect(() => {
    if (userId) {
      getUserData();
    } else {
      navigate("/login", { replace: true });
    }
    if (data) {
      setData();
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  if (data) {
    return (
      <StyledContainer>
        <StyledHeader>
          <BackButton />
          <SyledH3>Профиль</SyledH3>
        </StyledHeader>
        <StyledList
          itemLayout="horizontal"
          dataSource={profileData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={<div>{item.title}</div>} />
            </List.Item>
          )}
        />
        <Button onClick={logout}>Выйти</Button>
      </StyledContainer>
    );
  }

  return <div>Something went wrong...</div>;
};

export default Profile;
