/**
 * Voice Translation react native app
 */
import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
//
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';

export const Home = (props) => {
  //

  const [arabicTxt, setarabicTxt] = useState(' ...');
  const [listningStateTxt, setlistningStateTxt] = useState(
    'إضغط  على الميكروفون في الأسفل للبدأ بالترجمة',
  );
  const [isListning, setisListning] = useState(false);

  //icons :
  const switchIcon = <Icon2 name="arrow-swap" size={25} color="#888C9F" />;

  //functions :
  function startListning() {
    props.start();
    setisListning(true);
    setlistningStateTxt('جاري الإستماع ...');
  }
  //
  function stopListning() {
    setisListning(false);
    setlistningStateTxt('إضغط للبدأ بالترجمة');
  }
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
            onPress={() => navigation.push('Home')}>
            {switchIcon}
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
          <Text style={styles.txtDisplay}>{props.translatedTxt}</Text>
          <View>
            <Text style={styles.recState}>{props.englishVersion}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.recBtnHolder}>
        {props.isListning ? (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.recBtn}
              onPress={() => stopListning()}>
              <Icon name="pause" size={30} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.recBtn}
              onPress={() => startListning()}>
              <Icon name="microphone" size={35} color="white" />
            </TouchableOpacity>
          </View>
        )}
        {/* <ListneningOn /> */}
        {/* <View style={{marginHorizontal: 10, marginBottom: 10}}>
          <InputArabic />
        </View> */}
      </View>
    </View>
  );
};

const ListneningOn = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.recBtn} onPress={() => stopListning()}>
        <Icon name="pause" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const ListneningOff = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={styles.recBtn} onPress={() => startListning()}>
        <Icon name="microphone" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const InputArabic = () => {
  return (
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
      <View style={styles.textBox}>
        <TextInput placeholder={'أكتب النص هنا'} />
      </View>
      <TouchableOpacity
        style={styles.sendBtn}
        onPress={() => console.log('Arab text ...')}>
        <Icon name="send" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};

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
