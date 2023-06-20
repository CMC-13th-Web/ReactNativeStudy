import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import { Modal, Text, View } from "react-native";
import { validateDialogStyles } from "./ValidateDialog.style";

interface Props {
  dialogShow: boolean;
  dialogText: string;
  handleDialog: () => void;
}

const ValidateDialog = ({ dialogShow, dialogText, handleDialog }: Props) => {
  return (
    <Modal
      style={validateDialogStyles.modalView}
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <View style={validateDialogStyles.centeredView}>
        <View style={validateDialogStyles.modalView}>
          <Text style={validateDialogStyles.modalText}>{dialogText}</Text>
          <ColorButton
            //styles.openButton을 복사한뒤 새로운 값 backgroundColor 추가
            color="#2196F3"
            handleClick={() => {
              handleDialog();
            }}
            label="닫기"
          />
        </View>
      </View>
    </Modal>
  );
};

export default ValidateDialog;
