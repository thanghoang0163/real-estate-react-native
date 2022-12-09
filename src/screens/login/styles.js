import {StyleSheet} from 'react-native';
import {neutral, branchColor} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: neutral.white,
    flex: 1,
  },
  titleContainer: {
    paddingBottom: 40,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: neutral.title,
    marginBottom: 5,
  },
  subTitle: {
    color: neutral.bodyText,
    fontSize: 13,
  },
  forgetPassword: {
    color: branchColor.yellow,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 20,
  },
});
