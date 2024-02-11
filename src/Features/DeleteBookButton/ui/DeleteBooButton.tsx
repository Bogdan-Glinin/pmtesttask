import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { remove } from "../model/service/deteleBook";
import { showErrorNotification } from "../../../Shared/lib/notifications/Notification";

const DeteleBookButton = ({record}: any) => {

    const [deleteBook, { error: deleteBookError }] = remove();

    if(deleteBookError){
        showErrorNotification(["Прозошла ошибка"]);
        return(
            <div>Error...</div>
        )
    }

    return (
        <Button onClick={() => {
            deleteBook({ variables: { id: record.id } });
        }}>
            <DeleteOutlined />
          </Button>
      );
}
 
export default DeteleBookButton;

