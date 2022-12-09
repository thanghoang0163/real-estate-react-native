import {StyleSheet} from 'react-native';
import {neutral, branchColor, title} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
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
  step: {
    display: 'flex',
    flexDirection: 'row',
  },
  stepItem: {
    width: '48%',
    paddingVertical: 10,
  },
  stepItemActive: {
    borderStyle: 'solid',
    borderBottomColor: neutral.title,
    borderBottomWidth: 2,
  },
  stepItemTextActive: {
    color: neutral.title,
  },
  stepItemText: {
    fontSize: 15,
    fontWeight: '600',
    color: neutral.subText,
  },
  marginRight: {
    marginRight: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
  nameItem: {
    width: '47%',
  },
  term: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  termText: {
    fontSize: 13,
  },
  termSubText: {
    fontSize: 13,
    color: branchColor.yellow,
  },
  checkbox: {
    marginRight: 6,
  },
  titleVerify: title,
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: neutral.disable,
    borderRadius: 8,
    fontSize: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});
