import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import {neutral, branchColor} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: neutral.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 80,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
    color: branchColor.yellow,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 10,
  },
  name: {
    fontSize: 17,
    color: neutral.title,
    fontWeight: '600',
    marginBottom: 5,
    paddingHorizontal: 15,
  },
  address: {
    fontSize: 15,
    color: neutral.bodyText,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

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
