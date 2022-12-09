import {StyleSheet} from 'react-native';
import {neutral, title} from '../../styles';

export const styles = StyleSheet.create({
  container: {},
  title: title,
  inputContainer: {
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
  img: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  input: {
    fontSize: 15,
    flexGrow: 1,
  },
});
