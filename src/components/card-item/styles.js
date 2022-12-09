import {StyleSheet} from 'react-native';

import {neutral, branchColor} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: neutral.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 80,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    color: branchColor.yellow,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 10,
  },
  name: {
    fontSize: 17,
    color: neutral.title,
    fontWeight: '600',
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  address: {
    fontSize: 15,
    color: neutral.bodyText,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});
