import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
}

export default Splash;
