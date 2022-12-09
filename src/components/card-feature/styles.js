import {StyleSheet} from 'react-native';
import {branchColor, neutral} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: neutral.white,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  content: {
    paddingHorizontal: 20,
    width: '70%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  availableText: {
    backgroundColor: branchColor.yellow,
    padding: 5,
    borderRadius: 4,
    color: neutral.white,
    fontSize: 14,
    marginRight: 10,
  },
  hiredText: {
    backgroundColor: neutral.disable,
    padding: 5,
    borderRadius: 4,
    color: neutral.subText,
    fontSize: 14,
    marginRight: 10,
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  itemImg: {
    marginRight: 10,
  },
  bed: {
    borderRightColor: neutral.lineStroke,
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  bath: {
    borderRightColor: neutral.lineStroke,
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
});
