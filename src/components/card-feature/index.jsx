import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

function CardFeature({
  imgSrc,
  status,
  title,
  bedAmount,
  bathAmount,
  carAmount,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Image style={styles.img} source={imgSrc} />
        <View style={styles.content}>
          <View style={styles.header}>
            {status === 'available' ? (
              <Text style={styles.availableText}>Có sẵn</Text>
            ) : (
              <Text style={styles.hiredText}>Đã đặt cọc</Text>
            )}
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.detail}>
            <View style={[styles.bed, styles.item]}>
              <Image
                style={styles.itemImg}
                source={require('../../assets/icons/bed.png')}
              />
              <Text style={styles.bedText}>{bedAmount}</Text>
            </View>
            <View style={[styles.bath, styles.item]}>
              <Image
                style={styles.itemImg}
                source={require('../../assets/icons/bath.png')}
              />
              <Text style={styles.bathText}>{bathAmount}</Text>
            </View>
            <View style={[styles.car, styles.item]}>
              <Image
                style={styles.itemImg}
                source={require('../../assets/icons/car.png')}
              />
              <Text style={styles.carText}>{carAmount}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CardFeature;
