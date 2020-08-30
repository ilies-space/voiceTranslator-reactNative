/**
 * Voice Translation react native app
 */
import React from 'react';
import {View} from 'react-native';

export const Translator = () => {
  return <View flex={1}></View>;
};

export function Translate(text) {
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
      //setconvertedText(responseJson.matches[0].translation);

      return responseJson.matches[0].translation;
    })
    .catch((error) => {
      console.log(error);
    });
}
