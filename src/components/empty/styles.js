import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutral.white,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  bigText: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
    marginVertical: 20,
  },
  smallText: {
    fontSize: 15,
    color: neutral.bodyText,
    textAlign: 'center',
    marginBottom: 20,
  },
});
