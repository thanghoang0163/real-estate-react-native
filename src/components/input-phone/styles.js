import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  verify: {
    marginTop: 10,
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneCode: {
    marginRight: 10,
  },
  phoneCodeText: {
    fontSize: 15,
    color: neutral.title,
    marginRight: 10,
  },
  inputPhone: {
    flex: 1,
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: neutral.disable,
    borderRadius: 8,
    fontSize: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
