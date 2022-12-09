import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import CardItem from '../card-item';
import {styles} from './styles';

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

function CarouselList({data}) {
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
