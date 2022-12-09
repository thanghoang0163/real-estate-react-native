import React from 'react';
import {View, Image, Text} from 'react-native';
import BtnClick from '../button';
import {styles} from './styles';
import {branchColor} from '../../styles';

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
