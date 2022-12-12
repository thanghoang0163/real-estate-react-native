import react, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/login/index';
import Splash from './src/screens/splash/index';
import Register from './src/screens/register/index';
import Detail from './src/screens/detail/index';
import UserInfo from './src/screens/account/user-info/index';
import Statistic from './src/screens/account/statistic/index';
import Censorship from './src/screens/account/censorship/index';
import FeaturedApartment from './src/screens/featured-apartment/index';

const Stack = createNativeStackNavigator();

function App() {
  const [timeDown, setTimeDown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeDown(true);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#fff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={timeDown ? Login : Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="FeaturedApartment"
            component={FeaturedApartment}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="UserInfo"
            component={UserInfo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Statistic"
            component={Statistic}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Censorship"
            component={Censorship}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
