import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {neutral, title} from '../../styles';

const styles = StyleSheet.create({
  container: {},
  title: title,
  inputContainer: {
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
  img: {
    width: 20,
    height: 15,
    marginRight: 5,
  },
  input: {
    fontSize: 15,
    flexGrow: 1,
  },
});

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
