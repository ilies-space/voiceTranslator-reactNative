/**
 * Voice Translation react native app
 */
import React from 'react';
import {Text, View} from 'react-native';
import Home from './src/Screens/Home';
import {Translator} from './src/Screens/Translator';

const App = () => {
  return (
    <View flex={1}>
      <Translator />
    </View>
  );
};

export default App;
