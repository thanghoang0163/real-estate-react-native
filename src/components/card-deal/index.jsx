import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';

function CardDeal({
  imgSrc,
  title,
  desc,
  discountText,
  discountAmount,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={styles.discount}>
          <Text style={styles.discountText}>
            {discountText}{' '}
            <Text style={styles.discountAmount}>{discountAmount}</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CardDeal;
