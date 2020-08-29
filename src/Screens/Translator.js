/**
 * Voice Translation react native app
 */
import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

export const Translator = () => {
  function Translate(text) {
    const textCoded = encodeURIComponent(text.trim());
    const txt = 'hello%20you';
    const part1 = 'https://api.mymemory.translated.net/get?q=';
    const part2 = '!&langpair=en|ar';
    const link = part1.concat(textCoded, part2);

    fetch(link, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        setconvertedText(responseJson.matches[0].translation);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const [convertedText, setconvertedText] = useState('emty');
  const [entredValue, setentredValue] = useState('');

  return (
    <View flex={1}>
      <TextInput
        placeholder={'put text here'}
        value={entredValue}
        onChangeText={(value) => setentredValue(value)}
      />
      <Button title="translate" onPress={() => Translate(entredValue)} />

      <Text> {convertedText} </Text>
    </View>
  );
};
