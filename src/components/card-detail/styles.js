import {StyleSheet, Dimensions} from 'react-native';

import {neutral, branchColor} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: neutral.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    paddingVertical: 15,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#F0F2F5',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
  },
  priceContainer: {},
  priceText: {
    fontSize: 14,
    color: neutral.subText,
    marginBottom: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: branchColor.newGreen,
  },
  hotApartment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: branchColor.yellow,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  hotApartmentText: {
    fontSize: 15,
    color: neutral.white,
    marginRight: 10,
  },
});
