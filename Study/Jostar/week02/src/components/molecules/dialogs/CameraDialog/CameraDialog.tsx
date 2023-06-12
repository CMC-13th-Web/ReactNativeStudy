import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import IconButton from "components/atoms/buttons/IconButton/IconButton";
import { Modal, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { ButtonContainer, ModalContainer, ModalView } from "./CameraDialog.style";
import { useCallback } from "react";
import ImageResizer from "react-native-image-resizer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ImageInfo } from "types/apps/image";

interface CameraDialogProps {
  dialogShow: boolean;
  handleDialog: () => void;
  getImageInfo: (imageInfo: ImageInfo) => void;
}

const CameraDialog = ({ dialogShow, handleDialog, getImageInfo }: CameraDialogProps) => {
  const onResponse = useCallback(async (response: ImageOrVideo) => {
    return ImageResizer.createResizedImage(
      response.path,
      600,
      600,
      response.mime.includes("jpeg") ? "JPEG" : "PNG", // format
      100,
      0
    ).then((resizedImage) => {
      getImageInfo({ uri: resizedImage.uri });
    });
  }, []);
  const getGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(onResponse);
  };
  const getCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(onResponse);
  };
  return (
    <ModalContainer
      animationType={"slide"}
      transparent={true}
      visible={dialogShow}
    >
      <ModalView>
        <ButtonContainer>
          <IconButton
            icon={
              <MaterialCommunityIcons
                name="view-gallery"
                color={"black"}
                size={20}
              />
            }
            label={"사진첩 불러오기"}
            handleClick={getGallery}
          />
          <IconButton
            icon={<AntDesign name="camera" color={"black"} size={20} />}
            label={"카메라 촬영"}
            handleClick={getCamera}
          />
          <ColorButton
            handleClick={() => {
              handleDialog();
            }}
            label="닫기"
            color={"skyblue"}
          />
        </ButtonContainer>
      </ModalView>
    </ModalContainer>
  );
};

export default CameraDialog;
