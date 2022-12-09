import {StyleSheet} from 'react-native';

import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: neutral.white,
  },
});
