import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/", { replace: true })}>
      <ArrowLeftOutlined />
    </Button>
  );
};

export default BackButton;
