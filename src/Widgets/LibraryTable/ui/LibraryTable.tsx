import { Space, Spin, Table } from "antd";
import { useEffect, useState } from "react";
import { getAllBooks, getPaginatedBooks, getTotalBooks } from "../model/service/getBooks";
import { columnsSchema } from "../model/types/types";
import { UpdateBookButton } from "../../../Features/UpdateBookButton";
import { DeteleBookButton } from "../../../Features/DeleteBookButton";
import { SearchBook } from "../../../Features/SearchBook";

const LibraryTable = () => {
  const [tableData, setTableData] = useState([]);

  const { loading, error, data } = getAllBooks();

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  });

  const {data: totalBookCount} = getTotalBooks();

  const {data: paginatedBooks} = getPaginatedBooks(pagination.current - 1, pagination.pageSize);

  const handleTableChange = (pagination: any) => {
    setPagination((prev) => ({
      ...prev,
      current: pagination.current,
      pageSize: pagination.pageSize,
    }));
  };

  useEffect(() => {
    
    if (paginatedBooks) {
    console.log(pagination);
    console.log(paginatedBooks.allBooks);
      if(paginatedBooks.allBooks.length === 0 && pagination.current > 1){
        setPagination((prev) => ({
          ...prev,
          current: prev.current - 1,
        }));
      }
      setTableData(paginatedBooks.allBooks);
    }

  }, [paginatedBooks, totalBookCount]);

  useEffect(() => {
    if(totalBookCount){
      setPagination((prev) => ({
        ...prev,
        total: totalBookCount._allBooksMeta.count
      }))
    }
  }, [])

  const columns: columnsSchema[] = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Название",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Автор",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Жанр",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Действия",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <UpdateBookButton pagination={pagination} record={record} />
          <DeteleBookButton record={record} />
        </Space>
      ),
    },
  ];

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <div>Error ...</div>;
  }

  return (
    <div>
      <SearchBook oldData={data.allBooks} setTableData={setTableData} />
      <Table dataSource={tableData} columns={columns} pagination={pagination} onChange={handleTableChange}/>
    </div>
  );
};

export default LibraryTable;
