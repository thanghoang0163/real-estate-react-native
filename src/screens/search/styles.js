import {StyleSheet} from 'react-native';
import {neutral, branchColor} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: neutral.bgGrey,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: neutral.title,
    marginVertical: 10,
  },
  tabItem: {
    color: neutral.subText,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  tabItemActived: {
    color: branchColor.newGreen,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  tabItemContainer: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: branchColor.newGreen,
  },
  searchText: {
    fontSize: 15,
    color: neutral.bodyText,
    marginTop: 10,
    marginBottom: 20,
  },
});
