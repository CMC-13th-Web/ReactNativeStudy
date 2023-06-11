import React from 'react';
import {Button, Modal, View} from 'react-native';

const UploadImageModal = ({
  visible,
  onClose,
  onCamera,
  onGallery,
}: {
  visible: boolean;
  onClose: () => void;
  onCamera: () => void;
  onGallery: () => void;
}) => {
  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View>
        <Button
          title="카메라로 촬영하기"
          onPress={() => {
            onCamera();
            onClose();
          }}
        />
        <Button
          title="사진 선택하기"
          onPress={() => {
            onGallery();
            onClose();
          }}
        />
      </View>
    </Modal>
  );
};

export default UploadImageModal;
