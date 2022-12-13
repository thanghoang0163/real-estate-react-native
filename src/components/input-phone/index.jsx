import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './styles';
import {neutral} from '../../styles';

function InputPhone({onChangeText, style, value, data}) {
  return (
    <View style={[styles.verify, style]}>
      <Text style={styles.titleVerify}>SỐ ĐIỆN THOẠI</Text>
      <View style={styles.phone}>
        <SelectDropdown
          data={data}
          buttonStyle={styles.phoneCode}
          buttonTextStyle={styles.phoneCodeText}
          defaultButtonText="VN +84"
          renderDropdownIcon={() => {
            return (
              <Image source={require('../../assets/icons/arrow-bottom.png')} />
            );
          }}
          dropdownIconPosition="right"
        />
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
