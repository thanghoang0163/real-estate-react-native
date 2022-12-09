import {Button} from '@rneui/themed';
import {styles} from './styles';

function BtnClick({onPress, title, disabled, color}) {
  return (
    <Button
      buttonStyle={styles.button}
      titleStyle={styles.textBtn}
      title={title}
      color={color}
      onPress={onPress}
      disabled={disabled}
    />
  );
}

export default BtnClick;
