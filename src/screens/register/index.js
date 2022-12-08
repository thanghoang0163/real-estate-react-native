import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import Header from '../../components/header';
import {
  neutral,
  branchColor,
  title,
  footer,
  footerBtn,
  footerText,
} from '../../styles';
import CheckBox from 'react-native-check-box';
import Input from '../../components/input';
import InputPassword from '../../components/input-pass';
import BtnClick from '../../components/button';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: neutral.white,
    flex: 1,
  },
  titleContainer: {
    paddingBottom: 40,
    paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: neutral.title,
    marginBottom: 5,
  },
  subTitle: {
    color: neutral.bodyText,
    fontSize: 13,
  },
  step: {
    display: 'flex',
    flexDirection: 'row',
  },
  stepItem: {
    width: '48%',
    paddingVertical: 10,
  },
  stepItemActive: {
    borderStyle: 'solid',
    borderBottomColor: neutral.title,
    borderBottomWidth: 2,
  },
  stepItemTextActive: {
    color: neutral.title,
  },
  stepItemText: {
    fontSize: 15,
    fontWeight: '600',
    color: neutral.subText,
  },
  marginRight: {
    marginRight: 20,
  },
  name: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
  nameItem: {
    width: '47%',
  },
  term: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  termText: {
    fontSize: 13,
  },
  termSubText: {
    fontSize: 13,
    color: branchColor.yellow,
  },
  checkbox: {
    marginRight: 6,
  },
  titleVerify: title,
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
});

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
      <ScrollView style={styles.container}>
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
            <View style={styles.verify}>
              <Text style={styles.titleVerify}>SỐ ĐIỆN THOẠI</Text>
              <View style={styles.phone}>
                <View style={[styles.phoneCode, styles.input]}>
                  <Text style={styles.phoneCodeText}>VN +84</Text>
                  <Image
                    source={require('../../assets/icons/arrow-bottom.png')}
                  />
                </View>
                <TextInput
                  style={[styles.input, styles.inputPhone]}
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor={neutral.subText}
                  onChangeText={() => {}}
                />
              </View>
            </View>
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
