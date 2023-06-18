// stories/ValidateDialog.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { useState } from 'react';
import { Button, View } from 'react-native';
import ValidateDialog from './ValidateDialog';

export default {
  title: '컴포넌트/분자/다이얼로그/ValidateDialog',
  component: ValidateDialog,
} as ComponentMeta<typeof ValidateDialog>;

const ValidateDialogContainer = () => {
  const [dialogShow, setDialogShow] = useState<boolean>(false);
  return (<View>
    <Button title='다이얼로그 버튼' onPress={() => setDialogShow(true)}/>
    <ValidateDialog dialogShow={dialogShow} dialogText={"다이얼로그가 열렸습니다."} handleDialog={() => setDialogShow(false)}/>  
  </View>)
}

export const ValidateDialogTest: ComponentStory<typeof ValidateDialog> = () => (
  <ValidateDialogContainer/>
);
