import { StyleSheet } from 'react-native';
import { mixinStyle } from 'styles/mixinStyle';

export const validateDialogStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:22,
  },
  modalView: {
    ...mixinStyle.dialog
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  }
});