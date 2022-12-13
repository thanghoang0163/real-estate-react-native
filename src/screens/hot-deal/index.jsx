import {View, ScrollView} from 'react-native';
import Header from '../../components/header';
import CardDeal from '../../components/card-deal';
import {list} from './list';
import {styles} from './styles';

function HotDeal({navigation}) {
  return (
    <>
      <Header isHidden={true} title="Hot deal" style={styles.title} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.content}>
          {list.map(item => {
            return (
              <CardDeal
                key={item.id}
                imgSrc={item.imgSrc}
                desc={item.desc}
                title={item.title}
                onPress={() => {
                  navigation.navigate('DetailHotDeal');
                }}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}

export default HotDeal;
