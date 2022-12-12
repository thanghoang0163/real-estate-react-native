import {TouchableWithoutFeedback, Image, View, Text} from 'react-native';
import {styles} from './styles';

function Header({onPress, isBack, title, isHidden, style}) {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={onPress}>
        {isHidden ? (
          <View></View>
        ) : (
          <View style={styles.headerImg}>
            <Image
              source={
                isBack
                  ? require('../../assets/icons/arrow-left.png')
                  : require('../../assets/icons/display-hidden.png')
              }
            />
          </View>
        )}
      </TouchableWithoutFeedback>
      <Text style={[styles.title, style]}>{title}</Text>
    </View>
  );
}

export default Header;
