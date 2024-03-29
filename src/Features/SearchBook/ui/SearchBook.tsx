import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { searchBook } from "../model/service/searchBook";
import styled from "styled-components";

const StyledSearch = styled(Search)`
  width: 500px;
`

const SearchBook = ({oldData, setTableData}: any) => {
  const [search, setSearch] = useState("");

  const [searchBooks, { data: searchData }] = searchBook(search);

  const searchFields = () => {
    searchBooks();
  };

  useEffect(() => {
    if (searchData) {
      setTableData(searchData.allBooks);
    }
  }, [searchData, setTableData]);

  return (
    <StyledSearch
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        if (e.target.value.length === 0) setTableData(oldData);
      }}
      onSearch={searchFields}
      placeholder="Найти книгу"
      allowClear
      style={{ width: 500 }}
    />
  );
};

export default SearchBook;
