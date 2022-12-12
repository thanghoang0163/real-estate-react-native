import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: neutral.white,
    zIndex: 1,
  },
  headerImg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1B1E24',
  },
});
