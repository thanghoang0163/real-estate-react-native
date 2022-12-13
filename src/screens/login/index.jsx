import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Input from '../../components/input';
import BtnClick from '../../components/button';
import Header from '../../components/header';
import InputPassword from '../../components/input-pass';
import {branchColor, footer, footerBtn, footerText} from '../../styles';
import {styles} from './styles';
import {Alert} from 'react-native';

function Login({navigation}) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [hidePass, setHidePass] = useState(true);
  const [emailText, setEmailText] = useState('');
  const [passText, setPassText] = useState('');
  const [login, setLogin] = useState('');

  useEffect(() => {
    emailText !== '' || passText !== '' ? setIsEmpty(false) : setIsEmpty(true);
    getLogin();
  });

  const getLogin = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/login');
      const json = await response.json();
      // setLogin(json);
      Alert.alert(json);
    } catch (error) {
      // Alert.alert(error.message);
    }
  };

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
              setIsEmpty(false);
            }}
            value={login ? login.attributes.email : ''}
          />
          <InputPassword
            title="MẬT KHẨU"
            placeholder="Nhập vào mật khẩu"
            isHidePass={hidePass}
            onPress={() => {
              hidePass ? setHidePass(false) : setHidePass(true);
            }}
            onChangeText={e => {
              setPassText(e);
              setIsEmpty(false);
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
          disabled={isEmpty}
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
