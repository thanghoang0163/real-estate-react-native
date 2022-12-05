import Carousel from 'react-native-snap-carousel';
import {View, Text, Image, Dimensions} from 'react-native';
import CardItem from '../card-item';

const data = [
  {
    title: 'CĂN HỘ',
    name: '1 Bedroom Apartment Campsie',
    address: '2464 Royal Ln. Mesa, Melbourne',
    image: require('../../assets/images/thumb-small.png'),
  },
  {
    title: 'CĂN HỘ',
    name: '1 Bedroom Apartment Campsie2',
    address: '2464 Royal Ln. Mesa, Melbourne',
    image: require('../../assets/images/thumb-small.png'),
  },
  {
    title: 'CĂN HỘ',
    name: '1 Bedroom Apartment Campsie3',
    address: '2464 Royal Ln. Mesa, Melbourne',
    image: require('../../assets/images/thumb-small.png'),
  },
];

const CarouselItem = ({item, index}) => {
  return (
    <CardItem
      imgSrc={item.image}
      title={item.title}
      name={item.name}
      address={item.address}
      key={index}
    />
  );
};

function CarouselList() {
  return (
    <Carousel
      layout={'default'}
      data={data}
      renderItem={CarouselItem}
      sliderWidth={Dimensions.get('screen').width}
      itemWidth={Dimensions.get('screen').width * 0.7}
      contentContainerCustomStyle={{paddingLeft: 0}}
    />
  );
}

export default CarouselList;
