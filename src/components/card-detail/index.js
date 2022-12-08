import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import CardItem from '../card-item';

import {neutral, branchColor} from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.9,
    backgroundColor: neutral.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  footer: {
    paddingVertical: 15,
    marginHorizontal: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: '#F0F2F5',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
  },
  priceContainer: {},
  priceText: {
    fontSize: 14,
    color: neutral.subText,
    marginBottom: 5,
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    color: branchColor.newGreen,
  },
  hotApartment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: branchColor.yellow,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  hotApartmentText: {
    fontSize: 15,
    color: neutral.white,
    marginRight: 10,
  },
});

// Number formatting
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

function CarDetail({
  imgSrc,
  title,
  name,
  address,
  price,
  amountApartment,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <CardItem imgSrc={imgSrc} title={title} name={name} address={address} />
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Giá từ</Text>
          <Text style={styles.price}>${formatNumber(price)}</Text>
        </View>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.hotApartment}>
            <Text style={styles.hotApartmentText}>
              <Text style={{fontWeight: '700'}}>{amountApartment}</Text> căn hộ
              nổi bật
            </Text>
            <Image source={require('../../assets/icons/arrow-right.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default CarDetail;
