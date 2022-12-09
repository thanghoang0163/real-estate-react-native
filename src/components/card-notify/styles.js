import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: neutral.white,
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 8,
    hadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  img: {
    marginRight: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationImg: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 15,
    color: neutral.bodyText,
  },
  time: {
    fontSize: 13,
    color: neutral.subText,
  },
});
