import React from 'react';
import {View, StyleSheet, Image, Text, Dimensions} from 'react-native';
import BtnClick from '../button';
import {neutral, branchColor} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: neutral.white,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  bigText: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
    marginVertical: 20,
  },
  smallText: {
    fontSize: 15,
    color: neutral.bodyText,
    textAlign: 'center',
    marginBottom: 20,
  },
});

function Empty({bigText, smallText, onPress, btnText}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../../assets/images/empty.png')} />
        <Text style={styles.bigText}>{bigText}</Text>
        <Text style={styles.smallText}>{smallText}</Text>
        <BtnClick
          title={btnText}
          color={branchColor.newGreen}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

export default Empty;
