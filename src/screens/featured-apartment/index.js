import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/header/index';
import CardFeature from '../../components/card-feature';

const ApartmentList = [
  {
    id: 1,
    title: 'Căn hộ 1',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small1.png'),
    status: 'available',
  },
  {
    id: 2,
    title: 'Căn hộ 2',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small2.png'),
    status: 'hired',
  },
  {
    id: 3,
    title: 'Căn hộ 3',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small3.png'),
    status: 'available',
  },
  {
    id: 4,
    title: 'Căn hộ 4',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small4.png'),
    status: 'hired',
  },
  {
    id: 5,
    title: 'Căn hộ 5',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small1.png'),
    status: 'available',
  },
  {
    id: 6,
    title: 'Căn hộ 6',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small2.png'),
    status: 'hired',
  },
  {
    id: 7,
    title: 'Căn hộ 7',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small3.png'),
    status: 'available',
  },
  {
    id: 8,
    title: 'Căn hộ 8',
    bedAmount: 3,
    bathAmount: 2,
    carAmount: 1,
    imgSrc: require('../../assets/images/thumb-small4.png'),
    status: 'hired',
  },
];

const styles = StyleSheet.create({
  container: {marginVertical: 15},
});

function FeaturedApartment({navigation}) {
  return (
    <View>
      <Header
        isBack={false}
        title="Căn hộ nổi bật"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={styles.container}>
        {ApartmentList.map(item => {
          return (
            <CardFeature
              key={item.id}
              title={item.title}
              status={item.status}
              imgSrc={item.imgSrc}
              bedAmount={item.bedAmount}
              bathAmount={item.bathAmount}
              carAmount={item.carAmount}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default FeaturedApartment;
