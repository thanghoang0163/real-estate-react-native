import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import React from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import Header from '../../../components/header';
import {styles} from './styles';
import BtnClick from '../../../components/button/index';

function DetailHotDeal({navigation}) {
  return (
    <>
      <Header
        isBack={true}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.discount}>
          <View style={styles.discountText}>
            <Text style={styles.bigText}>Giảm giá 15%</Text>
            <Text style={styles.smallText}>
              Khách hàng sẽ được giảm 8% tiền mua nhà
            </Text>
          </View>
          <Image
            style={styles.discountImg}
            source={require('../../../assets/icons/discount.png')}
          />
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={require('../../../assets/images/thumb-large8.png')}
          />
          <View style={styles.idicator}>
            <Text style={styles.idicatorText}>1/10</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.shortInfo}>
            <View style={styles.header}>
              <Text style={styles.title}>Melbourne Square</Text>
              <View style={styles.iconHeader}>
                <View style={styles.heartIcon}>
                  <Image
                    source={require('../../../assets/icons/red-heart.png')}
                  />
                </View>
                <Image
                  style={styles.planeIcon}
                  source={require('../../../assets/icons/paper-plane.png')}
                />
              </View>
            </View>
            <View style={styles.location}>
              <Image
                style={styles.locationImg}
                source={require('../../../assets/icons/location.png')}
              />
              <Text style={styles.locationText}>
                2464 Royal Ln. Mesa, Melbourne
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Image
                style={styles.priceImg}
                source={require('../../../assets/icons/coin.png')}
              />
              <Text style={styles.priceText}>
                Giá từ <Text style={styles.price}>$690.000 - $995.000</Text>
              </Text>
            </View>
          </View>
          <View style={styles.desc}>
            <View style={styles.detailHeader}>
              <View style={styles.detailImg}>
                <Image
                  source={require('../../../assets/icons/description.png')}
                />
              </View>
              <Text style={styles.detailTitle}>Mô tả dự án</Text>
            </View>
            <Text style={styles.detailText}>
              Dự án là một điểm nhấn của khu vực SouthBank trong tương lai với
              hàng loạt các tiện ích, dịch vụ sống đẳng cấp được cung cấp, đem
              lại chất lượng sống hàng đầu cho những cư dân trong khu vực của dự
              án với 2 toà tháp là toà Đông (566 căn hộ) và toà Tây (386 căn
              hộ).
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <BtnClick
          title="Tìm đại lý"
          color="#fff"
          btnStyle={[styles.btnFind, styles.btnFooter]}
          titleStyle={styles.btnText}
        />
        <BtnClick
          title="Căn hộ mở bán"
          color="#036B46"
          btnStyle={styles.btnFooter}
        />
      </View>
    </>
  );
}

export default DetailHotDeal;
