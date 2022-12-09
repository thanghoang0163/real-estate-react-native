import {StyleSheet} from 'react-native';
import {neutral} from '../../styles';

export const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
  },
  content: {
    paddingHorizontal: 25,
    transform: [{translateY: -55}],
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: neutral.white,
    borderRadius: 8,
    padding: 20,
  },
  avatar: {
    borderRadius: 50,
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: neutral.bodyText,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
    marginTop: 15,
  },
  phone: {
    fontSize: 15,
    color: neutral.bodyText,
    marginBottom: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '48%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 62, 62, 0.06)',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
  },
  subText: {
    fontSize: 13,
    color: neutral.bodyText,
  },
  deposited: {
    marginLeft: 15,
    backgroundColor: 'rgba(0, 138, 92, 0.06)',
  },
  bodyTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: neutral.subText,
    marginVertical: 15,
  },
  bodyContent: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: neutral.white,
  },
  bodyBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  bodyText: {
    fontSize: 15,
    color: neutral.title,
  },
  bodyBtnContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyBtnText: {
    fontSize: 15,
    color: neutral.bodyText,
    marginRight: 10,
  },
});
