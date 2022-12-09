import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from './styles';

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
