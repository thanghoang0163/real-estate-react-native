import React, {useState, useRef, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, ScrollView} from 'react-native';
import Header from '../../components/header';
import {branchColor, footer, footerBtn, footerText} from '../../styles';
import CheckBox from 'react-native-check-box';
import Input from '../../components/input';
import InputPassword from '../../components/input-pass';
import BtnClick from '../../components/button';
import InputPhone from '../../components/input-phone';
import {styles} from './styles';

function Register({navigation}) {
  const [hidePass, setHidePass] = useState(true);
  const [hidePassAgain, setHidePassAgain] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const [isActived, setIsActived] = useState(false);

  const handleClick = () => {
    setIsActived(true);
  };

  return (
    <>
      <Header
        isBack={true}
        onPress={() => {
          navigation.goBack(null);
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Đăng ký</Text>
          <Text style={styles.subTitle}>
            Đăng ký tài khoản và tham gia Yarraland
          </Text>
        </View>
        <View style={styles.step}>
          <View
            style={[
              styles.stepItem,
              styles.stepItemActive,
              styles.marginRight,
            ]}>
            <Text style={[styles.stepItemText, styles.stepItemTextActive]}>
              1. Tạo tài khoản
            </Text>
          </View>
          <View
            style={[styles.stepItem, isActived ? styles.stepItemActive : null]}>
            <Text
              style={[
                styles.stepItemText,
                isActived ? styles.stepItemTextActive : null,
              ]}>
              2. Xác nhận
            </Text>
          </View>
        </View>
        <View style={styles.content}>
          {isActived ? (
            <InputPhone />
          ) : (
            <>
              <View style={styles.name}>
                <View style={[styles.nameItem, styles.marginRight]}>
                  <Input title="HỌ" placeholder="Nhập họ" />
                </View>
                <View style={styles.nameItem}>
                  <Input title="TÊN" placeholder="Nhập tên" />
                </View>
              </View>
              <View style={styles.inputEmail}>
                <Input
                  title="EMAIL"
                  placeholder="Nhập vào email"
                  imgLeft={require('../../assets/icons/mail.png')}
                />
                <InputPassword
                  title="MẬT KHẨU"
                  placeholder="Nhập vào mật khẩu"
                  isHidePass={hidePass ? true : false}
                  onPress={() => {
                    hidePass ? setHidePass(false) : setHidePass(true);
                  }}
                  hidePass={hidePass}
                />
                <InputPassword
                  title="NHẬP LẠI MẬT KHẨU"
                  placeholder="Nhập lại mật khẩu"
                  isHidePass={hidePassAgain ? true : false}
                  onPress={() => {
                    hidePassAgain
                      ? setHidePassAgain(false)
                      : setHidePassAgain(true);
                  }}
                  hidePass={hidePassAgain}
                />
              </View>
            </>
          )}
          <View style={styles.term}>
            <CheckBox
              style={styles.checkbox}
              isChecked={isChecked}
              onClick={() => {
                isChecked ? setIsChecked(false) : setIsChecked(true);
              }}
            />
            <Text style={styles.termText}>
              Đồng ý với{' '}
              <Text style={styles.termSubText}>điều khoản của Yarraland</Text>
            </Text>
          </View>
          <BtnClick
            isEmpty={false}
            title={isActived ? 'Gửi mã xác nhận' : 'Tiếp tục'}
            onPress={handleClick}
            color={branchColor.newGreen}
          />
          <View style={footer}>
            <Text style={footerText}>Đã có tài khoản ?</Text>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={footerBtn}>Đăng nhập</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default Register;
