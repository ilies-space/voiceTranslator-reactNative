/**
 * Voice Translation react native app
 */
import React from 'react';
import {Text, View} from 'react-native';
import VoiceToText from './src/Screens/VoiceToText';
import {Translator} from './src/Screens/Translator';
import {Home} from './src/Screens/Home';

const App = () => {
  return (
    <View flex={1}>
      <VoiceToText />
    </View>
  );
};

export default App;
