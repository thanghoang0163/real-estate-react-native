import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {branchColor} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: branchColor.newGreen,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo.png')} />
    </View>
  );
}

export default Splash;
