import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Button, List } from "antd";
import BackButton from "../../../Shared/ui/backButton/BackButton";
import { getUser } from "../model/service/getUserData";
import { decryptData } from "../../../Shared/lib/jwt/jsonwebtoken";

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

  // let profileData: profileDataSchema[] = [];

  useEffect(() => {
    if (userId) {
      getUserData();
    } else {
      navigate("/login", { replace: true });
    }
    if (data) {
      setData();
      console.log(profileData);
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
      <div style={{display: 'flex', alignItems: 'center', flexDirection:'column'}}>
        <div style={{display: 'flex', alignItems: 'center', width: 500}}>
        <BackButton />
        <h3 style={{textAlign: 'center', width: '80%'}}>Профиль</h3>
        </div>
        <List
        style={{width: 500}}
          itemLayout="horizontal"
          dataSource={profileData}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta title={<div>{item.title}</div>} />
            </List.Item>
          )}
        />
        <Button onClick={logout}>Выйти</Button>
      </div>
    );
  }

  return <div>Something went wrong...</div>;
};

export default Profile;
