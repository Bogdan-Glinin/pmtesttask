import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ModalComponent from "../../../Shared/ui/modal/Modal";
import { modalDataSchema } from "../../../Widgets/LibraryTable/model/types/types";
import { useState } from "react";
import { showErrorNotification } from "../../../Shared/lib/notifications/Notification";
import { update } from "../model/service/updateBook";

const UpdateBookButton = (record: any, pagination: any) => {
  const [editMode, setEditMode] = useState(false);
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");

  const [updateBook, { error: updateBookError }] = update(pagination);

  const showEditModal = (record: any) => {
    setBookAuthor(record.record.author);
    setBookGenre(record.record.genre);
    setBookName(record.record.name);
    setEditMode(true);
  };

  const handleEditOk = (record: any) => {
    updateBook({
      variables: {
        id: record.record.id,
        name: bookName,
        author: bookAuthor,
        genre: bookGenre,
      },
    });
    resetEditForm();
  };

  const resetEditForm = () => {
    setBookAuthor("");
    setBookGenre("");
    setBookName("");
    setEditMode(false);
  };

  const handleEditCancel = () => {
    resetEditForm();
  };

  const modalData: modalDataSchema[] = [
    {
      setData: setBookName,
      value: bookName,
      placeholder: "Название книги",
    },
    {
      setData: setBookAuthor,
      value: bookAuthor,
      placeholder: "Автор",
    },
    {
      setData: setBookGenre,
      value: bookGenre,
      placeholder: "Жанр",
    },
  ];

  if(updateBookError){
    showErrorNotification(["Произошла ошибка"]);
    return(<div>Error ...</div>)

  }

  return (
    <>
      <Button onClick={() => showEditModal(record)}>
        <EditOutlined />
      </Button>
      <ModalComponent
        title={"Изменение книги"}
        isVisible={editMode}
        handleOk={() => handleEditOk(record)}
        handleCancel={handleEditCancel}
        data={modalData}
      />
    </>
  );
};

export default UpdateBookButton;
