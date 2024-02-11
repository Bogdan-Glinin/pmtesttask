import { useState } from "react";
import { Button } from "antd";
import ModalComponent from "../../../Shared/ui/modal/Modal";
import { addBook } from "../model/service/addBook";

const AddBookButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [createBook, { error }] = addBook()

  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    
    createBook({
      variables: {
        name: bookName,
        author: bookAuthor,
        genre: bookGenre,
      },
    });
    setBookAuthor("");
    setBookGenre("");
    setBookName("");
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const modalData = [
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

  if(error){
    return <div>Error...</div>
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Добавить книгу
      </Button>
      <ModalComponent
        title={"Добавление книги"}
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={modalData}
      />
    </div>
  );
};

export default AddBookButton;
