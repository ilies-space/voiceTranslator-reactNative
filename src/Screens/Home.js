/**
 * Voice Translation react native app
 */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
//
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Fontisto';

export const Home = () => {
  //
  const [arabicTxt, setarabicTxt] = useState('تحدث بعد الضعط على الزر ...');
  const [listningStateTxt, setlistningStateTxt] = useState(
    'إضغط للبدأ بالترجمة',
  );

  return (
    <View
      flex={1}
      style={{
        backgroundColor: '#1E1E1E',
        paddingVertical: 5,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 15,
          marginHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
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
            style={{
              backgroundColor: '#282B32',
              width: 45,
              height: 45,
              borderRadius: 100 / 2,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
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

      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#23262D',
          borderRadius: 20,
          margin: 10,
          height: '80%',
          marginHorizontal: 20,
        }}>
        <View>
          <Text
            style={{
              color: '#888C9F',
              fontSize: 15,
              marginTop: 5,
              textAlign: 'center',
            }}>
            {listningStateTxt}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
          <Text
            style={{
              color: '#C4C8D2',
              fontSize: 23,
              fontWeight: 'bold',
              textAlign: 'center',
              justifyContent: 'center',
              padding: 10,
            }}>
            {arabicTxt}
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '100%',
        }}>
        <ListneningOn />
      </View>
    </View>
  );
};

const ListneningOn = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#EF4D40',
          width: 80,
          height: 80,
          borderRadius: 100 / 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 10,
          borderColor: '#22272E',
        }}>
        <Icon name="pause" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const ListneningOff = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#EF4D40',
          width: 80,
          height: 80,
          borderRadius: 100 / 2,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 10,
          borderColor: '#22272E',
        }}>
        <Icon name="microphone" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};
