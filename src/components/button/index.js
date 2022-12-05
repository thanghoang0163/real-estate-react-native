import {Button} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {neutral, branchColor} from '../../styles';

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: '600',
    color: neutral.white,
  },
});

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
