import React from 'react';
import {ScrollView} from 'react-native';
import Header from '../../components/header/index';
import CardFeature from '../../components/card-feature';
import {list} from './list';
import {styles} from './styles';

function FeaturedApartment({navigation}) {
  return (
    <>
      <Header
        isBack={false}
        title="Căn hộ nổi bật"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        {list.map(item => {
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
    </>
  );
}

export default FeaturedApartment;
