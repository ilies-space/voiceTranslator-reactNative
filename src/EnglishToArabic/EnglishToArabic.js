import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
//
import Voice from 'react-native-voice';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';
import Icon3 from 'react-native-vector-icons/dist/Entypo';

export default class EnglishToArabic extends Component {
  //////
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
      AR: '...',
      EN: '...',
      isListning: false,
    };
  }

  ////////

  onSpeechStartHandler() {
    //console.log('Speech started');
    // Update state to notify user that speech recognition has started
    this.setState({isListning: true});
    this.setState({AR: 'جاري الإستماع ...'});
    this.setState({EN: ' Listning'});
  }
  onSpeechResultsHandler(e) {
    // e = { value: string[] }
    // Loop through e.value for speech transcription results
    //console.log('Partial results', e);
    //this.setState({speech: e.value});
  }
  onSpeechEndHandler(e) {
    // e = { error?: boolean }
    //console.log('Speech ended', e);
    this.setState({isListning: false});
  }

  onSpeechErrorHandler(e) {
    // e = { code?: string, message?: string }
    //switch (e.code) { ... }
  }
  /////

  onSpeechPartialResultsHandler(e) {
    // The value from the speech
    const result = e.value[0];

    // Transfer speech to text to display it too
    this.setState({EN: result});
    // Must code phrase to pass it to the api
    //*EXMPLE : Hello World must be Hello%20World*
    const textCoded = encodeURIComponent(result.trim());
    // form a link to use the translator API & send request with the EN value to get AR
    const part1 = 'https://api.mymemory.translated.net/get?q=';
    const part2 = '!&langpair=en|ar';
    const link = part1.concat(textCoded, part2);
    fetch(link, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson !== null) {
          //unfortunately the translate API is paid (limite request)
          //*Displaying the server doesn't respond
          this.setState({
            AR: responseJson.responseData.translatedText.substring(0, 119),
          });
        } else {
          // Get result from Translator API
          const result = responseJson.matches[2].translation;
          // Get the Translated ENglish speech
          // and put it on AR value
          this.setState({AR: result});
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ////
  onStartButtonPress = async () => {
    try {
      await Voice.start('en_US');
    } catch (exception) {
      onSpeechErrorHandler(exception);
    }
  };
  render() {
    return (
      <View flex={1} style={styles.container}>
        <View style={styles.switchLanHolder}>
          <View style={styles.switchLanPosition}>
            <Image
              style={{height: 40, width: 40}}
              source={require('../img/us.png')}
            />
            <Text style={{marginLeft: 5, color: '#888C9F', fontSize: 19}}>
              English
            </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.switchLan}
              onPress={() => this.props.navigation.push('ArabicToEnglish')}>
              <Icon2 name="arrow-swap" size={25} color="#888C9F" />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 5, color: '#888C9F', fontSize: 19}}>
              Arabic
            </Text>
            <Image
              style={{height: 40, width: 40}}
              source={require('../img/dz.png')}
            />
          </View>
        </View>

        <View style={styles.cardTXT}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.txtDisplay}>{this.state.AR}</Text>
            {this.state.isListning ? (
              <ActivityIndicator size="large" color="#C4C8D2" />
            ) : (
              <View></View>
            )}
            <View>
              <Text style={styles.recState}>{this.state.EN}</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.recBtnHolder}>
          {this.state.isListning ? (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.recBtn}
                // onPress={() => stopListning()}
              >
                <Icon name="pause" size={30} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.recBtn}
                onPress={() => this.onStartButtonPress()}>
                <Icon name="microphone" size={35} color="white" />
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View
          style={{
            position: 'absolute',
            top: '2%',
            height: 40, // change these values according to your requirement.
            width: 40,
            borderTopRightRadius: 50,
            borderBottomRightRadius: 50,
            backgroundColor: '#C4C8D2',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => this.props.navigation.toggleDrawer()}>
            <Icon3 name="menu" size={30} color="#22272E" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

//TO CLEAN :

const styles = StyleSheet.create({
  sendBtn: {
    backgroundColor: '#EF4D40',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#22272E',
    right: 0,
    position: 'absolute',
  },
  textBox: {
    flex: 1,
    backgroundColor: '#C4C8D2',
    borderRadius: 10,
    marginHorizontal: 10,
    paddingHorizontal: 100,
  },
  recBtn: {
    backgroundColor: '#EF4D40',
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: '#22272E',
  },
  recBtnHolder: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  txtDisplay: {
    color: '#C4C8D2',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  recState: {
    color: '#888C9F',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  cardTXT: {
    justifyContent: 'center',
    backgroundColor: '#23262D',
    borderRadius: 20,
    margin: 10,
    height: '80%',
    marginHorizontal: 20,
  },
  switchLan: {
    backgroundColor: '#282B32',
    width: 45,
    height: 45,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchLanHolder: {
    flexDirection: 'row',
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  container: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 5,
    paddingTop: 60,
  },
  switchLanPosition: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
