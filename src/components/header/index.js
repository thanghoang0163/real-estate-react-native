import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {neutral, title} from '../../styles';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: neutral.white,
  },
  headerImg: {
    width: 15,
    height: 15,
    marginRight: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1B1E24',
  },
});

function Header({onPress, isBack, title, isHidden, style}) {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={onPress}>
        {isHidden ? (
          <View></View>
        ) : (
          <Image
            style={styles.headerImg}
            source={
              isBack
                ? require('../../assets/icons/arrow-left.png')
                : require('../../assets/icons/display-hidden.png')
            }
          />
        )}
      </TouchableWithoutFeedback>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
}

export default Header;
