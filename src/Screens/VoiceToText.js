import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView} from 'react-native';
//Voice To text :
import Voice from 'react-native-voice';
import {Home} from './Home';

export default class VoiceToText extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResultsHandler.bind(
      this,
    );
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    Voice.onSpeechError = this.onSpeechErrorHandler.bind(this);
    this.state = {
      speech: '...',
      englishVersion: '...',
    };
  }

  onSpeechStartHandler() {
    //console.log('Speech started');
    // Update state to notify user that speech recognition has started
  }
  onSpeechResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    //console.log('Partial results', e);
    //this.setState({speech: e.value});
  }

  onSpeechPartialResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    //console.log('Speech results', e);
    const result = e.value[0];
    console.log('result is :' + result);
    this.setState({englishVersion: result});
    const textCoded = encodeURIComponent(result.trim());
    console.log(textCoded);
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

        const result = responseJson.matches[0].translation;

        this.setState({speech: result});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSpeechEndHandler(e) {
    // e = { error?: boolean }
    //console.log('Speech ended', e);
  }

  onSpeechErrorHandler(e) {
    // e = { code?: string, message?: string }
    //switch (e.code) { ... }
  }

  ////
  onStartButtonPress = async () => {
    try {
      await Voice.start('en_US');
    } catch (exception) {
      // exception = Error | { code: string, message?: string }
      onSpeechErrorHandler(exception);
    }
  };
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Home
          translatedTxt={this.state.speech}
          start={this.onStartButtonPress}
          englishVersion={this.state.englishVersion}
        />
      </View>
    );
  }
}
