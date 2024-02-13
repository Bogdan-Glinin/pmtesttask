import { Button, Flex, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { LibraryTable } from "../../../Widgets/LibraryTable";
import { AddBookButton } from "../../../Features/AddBookButton";
import styled from "styled-components";
import { memo } from "react";

const LibraryPage = () => {
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
    justify-content: space-around;
  `;

  const StyledButton = styled(Button)`
    font-size: 30px;
    color: #fff;
    height: 64px;
  `;

  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <StyledHeader>
          <div>Библиотека</div>
          <StyledButton type="text" href="/profile">
            Профиль
          </StyledButton>
        </StyledHeader>
        <Content>
          <LibraryTable />
          <AddBookButton />
        </Content>
      </Layout>
    </Flex>
  );
};

export default memo(LibraryPage);
