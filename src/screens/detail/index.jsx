import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from '../search';
import HotDeal from '../hot-deal';
import Notification from '../notification';
import Account from '../account';
import {styles} from './styles';
import {branchColor} from '../../styles';

const Tab = createBottomTabNavigator();

function Detail() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tìm kiếm"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#D6963E',
          tabBarInactiveTintColor: branchColor.newGreen,
          tabBarIcon: ({focused}) => {
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
          tabBarActiveTintColor: '#D6963E',
          tabBarInactiveTintColor: branchColor.newGreen,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.tabBarImg}
                source={
                  focused
                    ? require('../../assets/icons/gift-active.png')
                    : require('../../assets/icons/gift.png')
                }
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#D6963E',
          tabBarInactiveTintColor: branchColor.newGreen,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.tabBarImg}
                source={
                  focused
                    ? require('../../assets/icons/bell-active.png')
                    : require('../../assets/icons/bell.png')
                }
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
          tabBarActiveTintColor: '#D6963E',
          tabBarInactiveTintColor: branchColor.newGreen,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={styles.tabBarImg}
                source={
                  focused
                    ? require('../../assets/icons/user-active.png')
                    : require('../../assets/icons/user.png')
                }
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Detail;
