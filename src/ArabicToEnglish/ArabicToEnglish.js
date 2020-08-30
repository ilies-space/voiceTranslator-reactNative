import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Tts from 'react-native-tts';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';

export default class ArabicToEnglish extends Component {
  //////
  constructor(props) {
    super(props);
    this.state = {
      AR: '',
      EN: '...',
    };
  }
  //
  Translate(text) {
    const textCoded = text.replace(/ /g, '%20');
    const part1 = 'https://api.mymemory.translated.net/get?q=';
    const part2 = '!&langpair=ar|en';
    const link = part1.concat(textCoded, part2);

    fetch(link, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({EN: responseJson.matches[1].translation});
        Tts.speak(this.state.EN);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //
  render() {
    return (
      <View flex={1} style={styles.container}>
        <View style={styles.switchLanHolder}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 5, color: '#888C9F', fontSize: 19}}>
              Arabic
            </Text>
            <Image
              style={{height: 40, width: 40}}
              source={require('../img/dz.png')}
            />
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.switchLan}
              onPress={() => this.props.navigation.goBack()}>
              <Icon2 name="arrow-swap" size={25} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.switchLanPosition}>
            <Image
              style={{height: 40, width: 40}}
              source={require('../img/us.png')}
            />
            <Text style={{marginLeft: 5, color: '#888C9F', fontSize: 19}}>
              English
            </Text>
          </View>
        </View>
        <View style={styles.cardTXT}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <Text style={styles.txtDisplay}>{this.state.EN}</Text>
            <View>
              <Text style={styles.recState}>{this.state.AR}</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.recBtnHolder}>
          <View style={{marginHorizontal: 10, marginBottom: 10}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View style={styles.textBox}>
                <TextInput
                  placeholder={'أكتب النص هنا'}
                  onChangeText={(value) => this.setState({AR: value})}
                  value={this.state.AR}
                />
              </View>
              <TouchableOpacity
                style={styles.sendBtn}
                onPress={() => this.Translate(this.state.AR)}>
                <Icon name="send" size={35} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

//Toclean

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
  },
  switchLanPosition: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
