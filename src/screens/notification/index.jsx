import {useState} from 'react';
import {View, ScrollView} from 'react-native';
import Header from '../../components/header/index';
import Empty from '../../components/empty';
import CardNotify from '../../components/card-notify';
import {list} from './list';
import {styles} from './styles';

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
            {list.map(item => {
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
