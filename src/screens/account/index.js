import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  mainImg: {
    width: '100%',
  },
  content: {
    paddingHorizontal: 25,
    transform: [{translateY: -55}],
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: neutral.white,
    borderRadius: 8,
    padding: 20,
  },
  avatar: {
    borderRadius: 50,
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    backgroundColor: neutral.bodyText,
    borderRadius: 50,
  },
  name: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
    marginTop: 15,
  },
  phone: {
    fontSize: 15,
    color: neutral.bodyText,
    marginBottom: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
  },
  infoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '48%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(245, 62, 62, 0.06)',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: neutral.title,
  },
  subText: {
    fontSize: 13,
    color: neutral.bodyText,
  },
  deposited: {
    marginLeft: 15,
    backgroundColor: 'rgba(0, 138, 92, 0.06)',
  },
  bodyTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: neutral.subText,
    marginVertical: 15,
  },
  bodyContent: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: neutral.white,
  },
  bodyBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  bodyText: {
    fontSize: 15,
    color: neutral.title,
  },
  bodyBtnContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bodyBtnText: {
    fontSize: 15,
    color: neutral.bodyText,
    marginRight: 10,
  },
});

function Account({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.mainImg}
        source={require('../../assets/images/thumb-large5.png')}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/user.png')}
            />
            <View style={styles.cameraContainer}>
              <Image
                style={styles.camera}
                source={require('../../assets/icons/camera.png')}
              />
            </View>
          </View>
          <Text style={styles.name}>Ted Luu</Text>
          <Text style={styles.phone}>0912.345.678</Text>
          <View style={styles.info}>
            <View style={styles.infoItem}>
              <View style={styles.textContainer}>
                <Text style={styles.infoTitle}>24</Text>
                <Text style={styles.subText}>Dự án đã lưu</Text>
              </View>
              <Image
                style={styles.infoImg}
                source={require('../../assets/icons/saved-project.png')}
              />
            </View>
            <View style={[styles.infoItem, styles.deposited]}>
              <View style={styles.textContainer}>
                <Text style={styles.infoTitle}>4</Text>
                <Text style={styles.subText}>Đã đặt cọc</Text>
              </View>
              <Image
                style={styles.infoImg}
                source={require('../../assets/icons/deposited.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>QUẢN LÝ</Text>
          <View style={styles.bodyContent}>
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate('UserInfo');
              }}>
              <View style={styles.bodyBtn}>
                <Text style={styles.bodyText}>Thông tin cá nhân</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.bodyBtn}>
                <Text style={styles.bodyText}>Thống kê</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.bodyBtn}>
                <Text style={styles.bodyText}>Kiểm duyệt Đại lý</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>CÀI ĐẶT</Text>
          <View style={styles.bodyContent}>
            <TouchableWithoutFeedback>
              <View style={styles.bodyBtn}>
                <Text style={styles.bodyText}>Chọn ngôn ngữ</Text>
                <View style={styles.bodyBtnContent}>
                  <Text style={styles.bodyBtnText}>Tiếng Việt</Text>
                  <Image
                    style={styles.bodyBtnImg}
                    source={require('../../assets/icons/arrow-right-gray.png')}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.bodyBtn}>
                <Text style={styles.bodyText}>Hỗ trợ</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default Account;
