import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import CardItem from '../card-item';
import {styles} from './styles';

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
