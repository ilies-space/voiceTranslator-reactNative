import React from 'react';
import {View, Text} from 'react-native';
//screens :

//navigation :
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ArabicToEnglish from './ArabicToEnglish/ArabicToEnglish';
import EnglishToArabic from './EnglishToArabic/EnglishToArabic';
import {About} from './AboutScreen/AboutScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

export const Route = () => {
  const Stack = createStackNavigator();
  const TranslationStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="EnglishToArabic"
          component={EnglishToArabic}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="ArabicToEnglish"
          component={ArabicToEnglish}
          options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    );
  };

  //
  const Drawer = createDrawerNavigator();

  return (
    <View flex={1}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerContentOptions={{
            activeTintColor: '#ffffff',
            backgroundColor: '#1C2227',
            inactiveTintColor: '#798288',
          }}>
          <Drawer.Screen name="Home" component={TranslationStack} />
          <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};
