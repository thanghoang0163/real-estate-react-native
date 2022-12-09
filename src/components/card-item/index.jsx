import {View, Text, StyleSheet, Image} from 'react-native';
import {styles} from './styles';

function CardItem({imgSrc, title, name, address}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imgSrc} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.iconContainer}>
          <Image
            style={styles.heartIcon}
            source={require('../../assets/icons/heart.png')}
          />
          <Image
            style={styles.planeIcon}
            source={require('../../assets/icons/paper-plane.png')}
          />
        </View>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.address}>{address}</Text>
    </View>
  );
}

export default CardItem;
