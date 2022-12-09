import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: 328,
    backgroundColor: neutral.white,
    borderRadius: 8,
    borderColor: 'rgba(210, 213, 217, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 10,
  },
  content: {
    padding: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  desc: {
    fontSize: 14,
    color: neutral.bodyText,
  },
});
