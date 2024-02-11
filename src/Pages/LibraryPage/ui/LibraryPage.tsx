import { Button, Flex, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { LibraryTable } from "../../../Widgets/LibraryTable";
import { AddBookButton } from "../../../Features/AddBookButton";
import { memo } from "react";

const LibraryPage = () => {
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
    width: "100%",
    fontSize: 30,
    display: 'flex',
    justifyContent: 'space-around'
  };

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header style={headerStyle}>
            <div>Библиотека</div>
            <Button style={{fontSize: 30, color: '#fff', height: 64}} type="text" href="/profile">Профиль</Button>
        </Header>
        <Content>
          <LibraryTable />
          <AddBookButton />
        </Content>
      </Layout>
    </Flex>
  );
};

export default memo(LibraryPage);
