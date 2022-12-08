import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Header from '../../components/header';
import CardDeal from '../../components/card-deal';
import {neutral} from '../../styles';

const HotDealList = [
  {
    id: 1,
    title: 'Melbourne Square Campsie',
    desc: 'Dự án là ¸điểm nhấn của khu vực SouthBank',
    imgSrc: require('../../assets/images/thumb-large1.png'),
    discountText: 'Tiền hoa hồng',
    discountAmount: '25%',
  },
  {
    id: 2,
    title: 'Melbourne Square Campsie',
    desc: 'Dự án là ¸điểm nhấn của khu vực SouthBank',
    imgSrc: require('../../assets/images/thumb-large2.png'),
    discountText: 'Giảm giá',
    discountAmount: '$45K',
  },
  {
    id: 3,
    title: 'Melbourne Square Campsie',
    desc: 'Dự án là ¸điểm nhấn của khu vực SouthBank',
    imgSrc: require('../../assets/images/thumb-large3.png'),
    discountText: 'Tiền hoa hồng',
    discountAmount: '25%',
  },
  {
    id: 4,
    title: 'Melbourne Square Campsie',
    desc: 'Dự án là ¸điểm nhấn của khu vực SouthBank',
    imgSrc: require('../../assets/images/thumb-large4.png'),
    discountText: 'Giảm giá',
    discountAmount: '$45K',
  },
];

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    backgroundColor: neutral.white,
  },
});

function HotDeal() {
  return (
    <ScrollView style={styles.container}>
      <Header isHidden={true} title="Hot deal" style={styles.title} />
      <View style={styles.content}>
        {HotDealList.map(item => {
          return (
            <CardDeal
              key={item.id}
              imgSrc={item.imgSrc}
              desc={item.desc}
              title={item.title}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

export default HotDeal;
