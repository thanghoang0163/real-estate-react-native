import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {branchColor, neutral} from '../../styles';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: neutral.white,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor: neutral.lineStroke,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    paddingBottom: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: neutral.title,
  },
  content: {
    paddingHorizontal: 20,
    width: '70%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  availableText: {
    backgroundColor: branchColor.yellow,
    padding: 5,
    borderRadius: 4,
    color: neutral.white,
    fontSize: 14,
    marginRight: 10,
  },
  hiredText: {
    backgroundColor: neutral.disable,
    padding: 5,
    borderRadius: 4,
    color: neutral.subText,
    fontSize: 14,
    marginRight: 10,
  },
  detail: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
  },
  itemImg: {
    marginRight: 10,
  },
  bed: {
    borderRightColor: neutral.lineStroke,
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
  bath: {
    borderRightColor: neutral.lineStroke,
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
});

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
