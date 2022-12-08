import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: 328,
    backgroundColor: neutral.white,
    borderRadius: 8,
    borderColor: 'rgba(210, 213, 217, 0.4)',
    borderWidth: 1,
    borderStyle: 'solid',
    marginVertical: 10,
  },
  content: {
    padding: 15,
    paddingBottom: 0,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  desc: {
    fontSize: 14,
    color: neutral.bodyText,
  },
});

function CardDeal({imgSrc, title, desc, discountText, discountAmount}) {
  return (
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
  );
}

export default CardDeal;
