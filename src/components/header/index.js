import {TouchableWithoutFeedback, Image, StyleSheet, View} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: neutral.white,
  },
  headerImg: {
    width: 8,
    height: 15,
  },
});

function Header({navigation}) {
  return (
    <View style={styles.header}>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.goBack(null);
        }}>
        <Image
          style={styles.headerImg}
          source={require('../../assets/icons/arrow-left.png')}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Header;
