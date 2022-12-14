import {StyleSheet} from 'react-native';
import {neutral} from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    marginTop: 10,
    backgroundColor: neutral.white,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  head: {
    height: 40,
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 2,
    borderStyle: 'solid',
    marginHorizontal: 20,
  },
  textHead: {
    fontSize: 13,
    fontWeight: '700',
    color: neutral.subText,
  },
  text: {
    marginVertical: 6,
    fontSize: 13,
    color: neutral.title,
  },
  textCenter: {
    textAlign: 'center',
  },
  row: {
    marginVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: neutral.white,
  },
  chooseDate: {
    width: 80,
    height: 35,
    backgroundColor: neutral.bgGrey,
    borderRadius: 4,
  },
  chooseDateText: {
    fontSize: 13,
    color: neutral.bodyText,
  },
});
