import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
  },
});

function Account() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImg}
        source={require('../../assets/images/thumb-large5.png')}
      />
    </View>
  );
}

export default Account;
