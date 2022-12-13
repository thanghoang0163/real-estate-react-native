import {Button} from '@rneui/themed';
import {styles} from './styles';

function BtnClick({onPress, title, disabled, color, btnStyle, titleStyle}) {
  return (
    <Button
      buttonStyle={[styles.button, btnStyle]}
      titleStyle={[styles.textBtn, titleStyle]}
      title={title}
      color={color}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

export default BtnClick;
