import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {neutral} from '../../styles';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: neutral.white,
    margin: 20,
    marginBottom: 0,
    padding: 20,
    borderRadius: 8,
    hadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  img: {
    marginRight: 10,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationImg: {
    marginRight: 5,
  },
  locationText: {
    fontSize: 15,
    color: neutral.bodyText,
  },
  time: {
    fontSize: 13,
    color: neutral.subText,
  },
});

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
