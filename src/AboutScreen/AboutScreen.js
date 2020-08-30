import React from 'react';
import {View, Text, TouchableOpacity, Linking, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// icon pack
import Icon from 'react-native-vector-icons/MaterialIcons';
export const About = () => {
  const navigation = useNavigation();
  return (
    <View flex={1} style={{alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: '#1E1E1E',
          position: 'absolute',
          top: 0,
          width: '100%',
          height: 36,
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: '#f5f6fa',
          padding: 20,
          borderRadius: 10,
          elevation: 5,
          marginBottom: 20,
          marginHorizontal: 15,
        }}>
        <View style={{alignItems: 'center', margin: 20}}>
          <Image
            style={{
              width: 150,
              height: 150,
              borderRadius: 150 / 2,
              overflow: 'hidden',
              borderWidth: 3,
              borderColor: '#1E1E1E',
            }}
            source={require('../img/ilies_ouldmenouer.jpg')}
          />
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Youtube :
            <Text
              style={{color: '#f9ca24'}}
              onPress={() =>
                Linking.openURL(
                  'https://www.youtube.com/channel/UC2G0E9JViAKh1fU32832Vlg',
                )
              }>
              {' '}
              ilies space
            </Text>
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Api used :
            <Text
              style={{color: '#2f3640'}}
              onPress={() =>
                Linking.openURL('https://api.mymemory.translated.net')
              }>
              {' '}
              mymemory
            </Text>
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Created by :
            <Text
              style={{color: '#1E1E1E'}}
              onPress={() => Linking.openURL('https://github.com/ilyasxdz')}>
              ilies Ouldmenouer
            </Text>
          </Text>
        </View>

        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            Contact me at :
            <Text
              style={{color: '#1E1E1E'}}
              onPress={() => Linking.openURL('mailto:ilyasdzair1@gmail.com')}>
              ilyasdzair1@gmail.com
            </Text>
          </Text>
        </View>
        <View style={{marginBottom: 10}}>
          <Text style={{color: '#2f3640', fontWeight: 'bold', fontSize: 15}}>
            UI inspired from :
            <Text
              onPress={() =>
                Linking.openURL(
                  'https://dribbble.com/shots/11423545-Voice-Translator-App',
                )
              }
              style={{color: '#1E1E1E'}}>
              dribbble
            </Text>
          </Text>
        </View>
      </View>
      <View style={{}}>
        <Text>Made with ❤ and React native</Text>
      </View>
    </View>
  );
};
