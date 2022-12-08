import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  verify: {
    marginTop: 10,
  },
  phone: {
    display: 'flex',
    flexDirection: 'row',
  },
  phoneCode: {
    marginRight: 10,
  },
  phoneCodeText: {
    fontSize: 15,
    color: neutral.title,
    marginRight: 10,
  },
  inputPhone: {
    flex: 1,
  },
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

function InputPhone({onChangeText}) {
  return (
    <View style={styles.verify}>
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
        />
      </View>
    </View>
  );
}

export default InputPhone;
