import {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/header/index';
import Empty from '../../components/empty';
import CardNotify from '../../components/card-notify';

const NotifyList = [
  {
    id: 1,
    title: 'Đã đặt cọc',
    location: '2464 New Jersey 45463',
    time: '25/05/2022, 11:30',
    imgSrc: require('../../assets/images/thumb-small5.png'),
  },
  {
    id: 2,
    title: 'Dự án mới',
    location: '2464 New Jersey 45463',
    time: '25/05/2022, 11:30',
    imgSrc: require('../../assets/images/thumb-small6.png'),
  },
  {
    id: 3,
    title: 'Đã đặt cọc',
    location: '2464 New Jersey 45463',
    time: '25/05/2022, 11:30',
    imgSrc: require('../../assets/images/thumb-small7.png'),
  },
  {
    id: 4,
    title: 'Dự án mới',
    location: '2464 New Jersey 45463',
    time: '25/05/2022, 11:30',
    imgSrc: require('../../assets/images/thumb-small8.png'),
  },
  {
    id: 5,
    title: 'Đã đặt cọc',
    location: '2464 New Jersey 45463',
    time: '25/05/2022, 11:30',
    imgSrc: require('../../assets/images/thumb-small5.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
  },
  content: {
    marginBottom: 20,
  },
});

function Notification() {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <>
      <Header isHidden={true} title="Thông báo" style={styles.title} />
      <ScrollView contentContainerStyle={styles.container}>
        {isEmpty ? (
          <Empty
            bigText="Tài khoản đại lý"
            smallText="Đăng ký tài khoản để nhận thêm nhiều thông tin về ưu đãi"
            btnText="Đăng ký ngay"
          />
        ) : (
          <View style={styles.content}>
            {NotifyList.map(item => {
              return (
                <CardNotify
                  key={item.id}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  locationText={item.location}
                  time={item.time}
                />
              );
            })}
          </View>
        )}
      </ScrollView>
    </>
  );
}

export default Notification;
