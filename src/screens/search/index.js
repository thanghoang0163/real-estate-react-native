import {useState} from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
import CarouselList from '../../components/carousel';
import CarDetail from '../../components/card-detail';
import {Tab} from '@rneui/themed';

import {neutral, branchColor} from '../../styles';
import {style} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: neutral.bgGrey,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: neutral.title,
    marginVertical: 10,
  },
  tabItem: {
    color: neutral.subText,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  tabItemActived: {
    color: branchColor.newGreen,
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  tabItemContainer: {
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: branchColor.newGreen,
  },
  searchText: {
    fontSize: 15,
    color: neutral.bodyText,
    marginTop: 10,
    marginBottom: 20,
  },
});

function Search({navigation: {navigate}}) {
  const [index, setIndex] = useState(0);
  const [isActived, setIsActived] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Searchbar
        placeholder="Bấm để tìm kiếm"
        icon={() => {
          return <Image source={require('../../assets/icons/search.png')} />;
        }}
      />
      <Text style={styles.title}>DỰ ÁN NỔI BẬT</Text>
      <CarouselList />
      <Tab
        value={index}
        scrollable={true}
        disableIndicator={false}
        indicatorStyle={styles.indicator}
        onChange={e => {
          setIndex(e), setIsActived(true);
        }}>
        <Tab.Item
          title="Tất cả"
          titleStyle={isActived ? styles.tabItemActived : styles.tabItem}
          containerStyle={active =>
            active ? styles.tabItemContainer : undefined
          }
        />
        <Tab.Item
          title="Đã hoàn thành"
          titleStyle={isActived ? styles.tabItemActived : styles.tabItem}
          containerStyle={active =>
            active ? styles.tabItemContainer : undefined
          }
        />
        <Tab.Item
          title="Đang xây dựng"
          titleStyle={isActived ? styles.tabItemActived : styles.tabItem}
          containerStyle={active =>
            active ? styles.tabItemContainer : undefined
          }
        />
        <Tab.Item
          title="Dự án tương lai"
          titleStyle={isActived ? styles.tabItemActived : styles.tabItemActived}
          containerStyle={active =>
            active ? styles.tabItemContainer : undefined
          }
        />
      </Tab>
      <Text style={styles.searchText}>
        Tìm thấy{' '}
        <Text style={{fontWeight: '700', color: neutral.title}}>28</Text> kết
        quả
      </Text>
      <CarDetail
        imgSrc={require('../../assets/images/thumb-large.png')}
        title="CĂN HỘ"
        name="1 Bedroom Apartment Campsie"
        address="2464 Royal Ln. Mesa, Melbourne"
        price={670000}
        onPress={() => navigate('FeaturedApartment')}
        amountApartment={13}
      />
      <CarDetail
        imgSrc={require('../../assets/images/thumb-large.png')}
        title="CĂN HỘ"
        name="1 Bedroom Apartment Campsie"
        address="2464 Royal Ln. Mesa, Melbourne"
        price={670000}
        onPress={() => navigate('FeaturedApartment')}
        amountApartment={13}
      />
      <CarDetail
        imgSrc={require('../../assets/images/thumb-large.png')}
        title="CĂN HỘ"
        name="1 Bedroom Apartment Campsie"
        address="2464 Royal Ln. Mesa, Melbourne"
        price={670000}
        onPress={() => navigate('FeaturedApartment')}
        amountApartment={13}
      />
    </ScrollView>
  );
}

export default Search;
