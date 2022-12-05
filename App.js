import react, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './src/screens/login/index';
import Splash from './src/screens/splash/index';
import Register from './src/screens/register/index';
import Detail from './src/screens/detail/index';

const Stack = createNativeStackNavigator();

function App() {
  const [timeDown, setTimeDown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimeDown(true);
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
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
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;