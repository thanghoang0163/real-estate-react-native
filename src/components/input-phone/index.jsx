import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import {styles} from './styles';
import {neutral} from '../../styles';

function InputPhone({onChangeText, style, value}) {
  return (
    <View style={[styles.verify, style]}>
      <Text style={styles.titleVerify}>SỐ ĐIỆN THOẠI</Text>
      <View style={styles.phone}>
        <View style={[styles.phoneCode, styles.input]}>
          <Text style={styles.phoneCodeText}>VN +84</Text>
          <Image source={require('../../assets/icons/arrow-bottom.png')} />
        </View>
        <TextInput
          style={[styles.input, styles.inputPhone]}
          placeholder="Nhập số điện thoại"
          placeholderTextColor={neutral.subText}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
}

export default InputPhone;
