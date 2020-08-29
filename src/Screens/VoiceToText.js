import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView} from 'react-native';
//Voice To text :
import Voice from 'react-native-voice';

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
      speech: 'press START BUTTON',
    };
  }

  onSpeechStartHandler() {
    console.log('Speech started');
    // Update state to notify user that speech recognition has started
  }
  onSpeechPartialResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    console.log('Partial results', e);
    this.setState({speech: e.value});
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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View
          style={{
            backgroundColor: '#ecf0f1',
            height: 150,
            margin: 20,
            borderRadius: 20,
            padding: 20,
          }}>
          <ScrollView>
            <Text> Text : {this.state.speech} </Text>
          </ScrollView>
        </View>

        <Button title={'start'} onPress={this.onStartButtonPress} />
      </View>
    );
  }
}