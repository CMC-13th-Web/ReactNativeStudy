import React, { useCallback, useState } from "react";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import { View, Image } from "react-native";
import { ScreenContainer } from "styles/mixinStyle";
import ColorButton from "components/atoms/buttons/ColorButton/ColorButton";
import CameraDialog from "components/molecules/dialogs/CameraDialog/CameraDialog";
import { ImageInfo } from "types/apps/image";

const CameraScreen = () => {
  const [preview, setPreview] = useState<ImageInfo>({ uri: "" });
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  return (
    <>
      <ScreenContainer>
        <View>
          {preview.uri && (
            <Image source={preview} style={{ width: 500, height: 500 }} />
          )}
        </View>
        <ColorButton
          label={"사진 설정하기"}
          color={"yellow"}
          handleClick={() => {
            setDialogShow(true);
          }}
        />
      </ScreenContainer>
      <CameraDialog
        dialogShow={dialogShow}
        handleDialog={() => setDialogShow(!dialogShow)}
        getImageInfo={(preview: ImageInfo) => {
          setPreview(preview);
        }}
      />
    </>
  );
};

export default CameraScreen;
