import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';
import {neutral} from '../../styles';

function Input({
  title,
  imgLeft,
  imgRight,
  placeholder,
  isHidePass,
  value,
  onPress,
  onChangeText,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        {imgLeft ? <Image style={styles.img} source={imgLeft} /> : ''}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={neutral.subText}
          secureTextEntry={isHidePass}
          onChangeText={onChangeText}
          value={value}
        />
        {imgRight ? (
          <TouchableWithoutFeedback onPress={onPress}>
            <Image style={styles.img} source={imgRight} />
          </TouchableWithoutFeedback>
        ) : (
          ''
        )}
      </View>
    </View>
  );
}

export default Input;
