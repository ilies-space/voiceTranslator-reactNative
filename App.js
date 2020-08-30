/**
 * Voice Translation react native app
 */
import React from 'react';
import {View} from 'react-native';
import {Home} from './src/Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeAR} from './src/Screens/HomeAR';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <View flex={1}>
      {/* <VoiceToText /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="HomeAR"
            component={HomeAR}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
