import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles';

function CardNotify({imgSrc, title, locationText, time}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imgSrc} />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.location}>
            <Image
              style={styles.locationImg}
              source={require('../../assets/icons/location.png')}
            />
            <Text style={styles.locationText}>{locationText}</Text>
          </View>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

export default CardNotify;
