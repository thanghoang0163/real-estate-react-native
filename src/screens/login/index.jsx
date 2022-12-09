import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';
import BtnClick from '../../components/button';
import Header from '../../components/header';
import InputPassword from '../../components/input-pass';
import {branchColor, footer, footerBtn, footerText} from '../../styles';
import {styles} from './styles';

function Login({navigation}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [hidePass, setHidePass] = useState(true);
  const [emailText, setEmailText] = useState('');
  const [passText, setPassText] = useState('');

  useEffect(() => {
    emailText !== '' || passText !== '' ? setIsEmpty(false) : setIsEmpty(true);
  });
  return (
    <>
      <Header
        isBack={true}
        onPress={() => {
          () => {
            navigation.goBack();
          };
        }}
      />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Đăng nhập</Text>
          <Text style={styles.subTitle}>
            Đăng nhập với số email và mật khẩu
          </Text>
        </View>
        <View style={styles.input}>
          <Input
            title="EMAIL"
            placeholder="Nhập vào email"
            imgLeft={require('../../assets/icons/mail.png')}
            onChangeText={e => {
              setEmailText(e);
            }}
          />
          <InputPassword
            title="MẬT KHẨU"
            placeholder="Nhập vào mật khẩu"
            isHidePass={hidePass ? true : false}
            onPress={() => {
              hidePass ? setHidePass(false) : setHidePass(true);
            }}
            onChangeText={e => {
              setPassText(e);
            }}
            hidePass={hidePass}
          />
        </View>
        <TouchableWithoutFeedback onPress={() => {}}>
          <Text style={styles.forgetPassword}>Quên mật khẩu ?</Text>
        </TouchableWithoutFeedback>

        <BtnClick
          isEmpty={isEmpty}
          title="Đăng nhập"
          onPress={() => {
            navigation.navigate('Detail');
          }}
          disabled={isEmpty ? true : false}
          color={branchColor.newGreen}
        />
        <View style={footer}>
          <Text style={footerText}>Bạn chưa có tài khoản ?</Text>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={footerBtn}>Đăng ký</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </>
  );
}

export default Login;
