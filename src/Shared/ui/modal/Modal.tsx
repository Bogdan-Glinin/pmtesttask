import { Input, Modal } from "antd";
import { bookValidationSchema } from "../../../Features/AddBookButton/lib/validation/validation";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../lib/notifications/Notification";
import { ValidationError } from "yup";
import { Dispatch, SetStateAction } from "react";

interface ModalComponentProps {
  title: string;
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  data: dataSchema[];
}

export interface dataSchema {
  setData: Dispatch<SetStateAction<string>>;
  value: string;
  placeholder: string;
}

const ModalComponent = ({
  title,
  isVisible,
  handleOk,
  handleCancel,
  data,
}: ModalComponentProps) => {
  const submit = () => {
    try {
      bookValidationSchema.validateSync(
        {
          name: data[0].value,
          author: data[1].value,
          genre: data[2].value,
        },
        { abortEarly: false }
      );

      handleOk();

      showSuccessNotification(["Успешно!"]);
    } catch (error) {
      if (error instanceof ValidationError) {
        showErrorNotification(error.errors);
      }
    }
  };

  return (
    <Modal title={title} open={isVisible} onOk={submit} onCancel={handleCancel}>
      {data.map((item: any) => (
        <Input
          key={item.placeholder}
          onChange={(e) => item.setData(e.target.value)}
          value={item.value}
          placeholder={item.placeholder}
        />
      ))}
    </Modal>
  );
};

export default ModalComponent;
