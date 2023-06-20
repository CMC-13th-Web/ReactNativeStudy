import ValidateDialog from "components/molecules/dialogs/ValidateDialog/ValidateDialog";
import { useRef, useState } from "react";
import GpsMapScreen from "screens/GpsMapScreen/GpsMapScreen";
import MapScreen from "screens/MapScreen/MapScreen";
import { Context } from "utils/Context";

const App = () => {
  const dialogText = useRef<string>("");
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  const setDialog = (text: string, isShow: boolean) => {
    dialogText.current = text;
    setDialogShow(isShow);
  };
  return (
    <Context.Provider value={{ setDialog }}>
      <ValidateDialog
        dialogShow={dialogShow}
        dialogText={dialogText.current}
        handleDialog={() => setDialogShow(false)}
      />
      <GpsMapScreen />
    </Context.Provider>
  );
};

export default App;
