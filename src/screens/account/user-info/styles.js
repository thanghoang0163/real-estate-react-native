import {StyleSheet} from 'react-native';
import {neutral} from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    padding: 20,
    backgroundColor: neutral.white,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstName: {
    width: '50%',
  },
  lastName: {
    width: '45%',
  },
  phone: {
    marginBottom: 10,
  },
});
