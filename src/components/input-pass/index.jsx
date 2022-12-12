import React from 'react';
import Input from '../input';

function InputPassword({
  title,
  placeholder,
  hidePass,
  isHidePass,
  onPress,
  onChangeText,
}) {
  return (
    <>
      <Input
        title={title}
        placeholder={placeholder}
        imgLeft={require('../../assets/icons/lock.png')}
        imgRight={
          hidePass
            ? require('../../assets/icons/invi-password.png')
            : require('../../assets/icons/visi-password.png')
        }
        isHidePass={isHidePass}
        onPress={onPress}
        onChangeText={onChangeText}
      />
    </>
  );
}

export default InputPassword;
