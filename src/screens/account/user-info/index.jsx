import React from 'react';
import {View} from 'react-native';
import BtnClick from '../../../components/button';
import Input from '../../../components/input';
import InputPhone from '../../../components/input-phone';
import Header from '../../../components/header';
import {styles} from './styles';

function UserInfo({navigation}) {
  return (
    <>
      <Header
        isBack={true}
        title="Thông tin cá nhân"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.name}>
          <Input style={styles.lastName} title="HỌ" placeholder="Nhập họ" />
          <Input style={styles.firstName} title="TÊN" placeholder="Nhập tên" />
        </View>
        <Input title="CHỨC DANH" placeholder="Nhập chức danh" />
        <Input title="EMAIL" placeholder="Nhập email" />
        <InputPhone style={styles.phone} />
        <BtnClick title="Cập nhật thông tin" color="#16352E" />
      </View>
    </>
  );
}

export default UserInfo;
