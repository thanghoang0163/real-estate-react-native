import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Search from './search';
import HotDeal from './hot-deal';
import Notify from './notify';
import Account from './account';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarImg: {
    width: 20,
  },
});

function Detail() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tìm kiếm"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#B47A2C',
          tabBarIcon: () => {
            return (
              <Image source={require('../../assets/icons/mini-logo.png')} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Hot deal"
        component={HotDeal}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#B47A2C',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.tabBarImg}
                source={require('../../assets/icons/gift.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notify}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#B47A2C',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.tabBarImg}
                source={require('../../assets/icons/bell.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={Account}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#B47A2C',
          tabBarIcon: () => {
            return (
              <Image
                style={styles.tabBarImg}
                source={require('../../assets/icons/user.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Detail;
