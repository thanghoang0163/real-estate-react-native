import {StyleSheet, Dimensions} from 'react-native';
import {branchColor, neutral} from '../../../styles';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
    backgroundColor: neutral.white,
  },
  discount: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF3E1',
    padding: 20,
  },
  bigText: {
    fontSize: 19,
    fontWeight: '600',
    color: neutral.title,
  },
  smallText: {
    fontSize: 15,
    color: neutral.bodyText,
  },
  imgContainer: {
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 250,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  idicator: {
    position: 'absolute',
    bottom: 40,
    right: 10,
    backgroundColor: neutral.title,
    opacity: 0.7,
    padding: 5,
    borderRadius: 24,
  },
  idicatorText: {
    fontSize: 13,
    color: neutral.white,
  },
  detail: {
    margin: 20,
    transform: [{translateY: -50}],
  },
  shortInfo: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    shadowColor: '#999',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: neutral.white,
    borderRadius: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    color: neutral.title,
  },
  iconHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heartIcon: {
    padding: 10,
    backgroundColor: '#F53E3E14',
    borderRadius: 32,
    marginRight: 15,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  locationImg: {
    marginRight: 10,
  },
  locationText: {
    fontSize: 15,
    color: neutral.bodyText,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  priceImg: {
    marginRight: 10,
  },
  priceText: {
    fontSize: 15,
    color: neutral.bodyText,
  },
  price: {
    fontSize: 17,
    color: branchColor.newGreen,
    fontWeight: '700',
  },
  desc: {
    marginVertical: 20,
  },
  detailHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailImg: {
    backgroundColor: branchColor.yellow,
    padding: 8,
    borderRadius: 24,
    marginRight: 10,
  },
  detailTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  detailText: {
    fontSize: 15,
    color: neutral.bodyText,
    marginVertical: 10,
    lineHeight: 20,
  },
  footer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: neutral.white,
    zIndex: 2,
  },
  btnFind: {
    borderColor: branchColor.newGreen,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  btnText: {
    fontSize: 17,
    color: branchColor.newGreen,
  },
  btnFooter: {
    width: Dimensions.get('window').width * 0.43,
  },
});
