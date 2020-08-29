import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//Voice To text :
import Voice from 'react-native-voice';

export default class Home extends Component {
  constructor(props) {
    super(props);
    Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
    Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
    Voice.onSpeechPartialResults = this.onSpeechPartialResultsHandler.bind(
      this,
    );
    Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
    Voice.onSpeechError = this.onSpeechErrorHandler.bind(this);
  }

  onSpeechStartHandler() {
    console.log('Speech started');
    // Update state to notify user that speech recognition has started
  }
  onSpeechPartialResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    console.log('Partial results', e);
  }

  onSpeechResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    console.log('Speech results', e);
  }

  onSpeechEndHandler(e) {
    // e = { error?: boolean }
    console.log('Speech ended', e);
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
      <View>
        <TouchableOpacity onPress={this.onStartButtonPress}>
          <View>
            <Text>Start</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
