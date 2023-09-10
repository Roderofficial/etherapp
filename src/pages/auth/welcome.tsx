import React from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const WelcomeAuth = (props: any): JSX.Element => {
  return (
    <View style={style.overlayContainer}>
      <Image
        source={require('../../assets/images/welcome2.png')}
        style={style.welcomeImage}
      />
      <View style={style.mainContainer}>
        <View style={{padding: 10}}>
          <Text
            style={{
              fontSize: 30,
              color: '#000',
              fontWeight: 'bold',
              marginBottom: 30,
            }}>
            Witaj w Ether
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '400',
              fontFamily: 'Roboto',
            }}>
            Aby korzystać z aplikacji musisz posiadać konto. Jeśli nie masz
            konta to możesz je założyć.
          </Text>
        </View>
        <View style={{marginBottom: 20, marginTop: 20}}>
          <Pressable
            onPress={() => {
              props.navigation.navigate('LoginEmail');
            }}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#045cbc' : '#045cbc',
              },
              style.loginButton,
            ]}>
            <Text style={style.loginButtonText}>Zaloguj się</Text>
          </Pressable>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: 'center',
                  color: '#000',
                  textTransform: 'uppercase',
                }}>
                LUB
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#000'}} />
          </View>
          <Pressable
            onPress={() => null}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#e3e3e3' : '#fff',
              },
              style.registerButton,
            ]}>
            <Text style={style.registerButtonText}>Rejestracja</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  overlayContainer: {
    backgroundColor: '#FBFBFB',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    minHeight: Dimensions.get('window').height,
  },
  registerButton: {
    borderRadius: 10,
    padding: 14,
    width: Dimensions.get('window').width - 50,
    elevation: 2,
    marginTop: 10,

    borderColor: '#fff',
  },
  loginButton: {
    borderRadius: 10,
    padding: 14,
    color: '#045cbc',
    marginBottom: 10,
    elevation: 2,
  },
  registerButtonText: {
    fontSize: 14,
    color: '#000',

    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    width: '100%',
    paddingTop: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  loginButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  welcomeImage: {
    height: 300,
    padding: 10,
    resizeMode: 'contain',
    width: '100%',
  },
});

export default WelcomeAuth;
