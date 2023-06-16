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
    <View>
      <View style={style.mainContainer}>
        <View>
          <Image
            source={require('../../assets/images/auth_welcome.png')}
            style={style.welcomeImage}
          />
        </View>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
            Witaj w Ether
          </Text>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
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
                backgroundColor: pressed ? '#e3e3e3' : '#fff',
              },
              style.loginButton,
            ]}>
            <Text style={style.loginButtonText}>Zaloguj się</Text>
          </Pressable>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
            <View>
              <Text
                style={{
                  width: 50,
                  textAlign: 'center',
                  color: '#fff',
                  textTransform: 'uppercase',
                }}>
                LUB
              </Text>
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: '#fff'}} />
          </View>
          <Pressable
            onPress={() => null}
            style={({pressed}) => [
              {
                backgroundColor: pressed ? '#0d47a1' : '#033c9e',
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
  registerButton: {
    borderRadius: 5,
    padding: 14,
    width: Dimensions.get('window').width - 50,
    elevation: 2,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  loginButton: {
    borderRadius: 5,
    padding: 14,
    color: '#033c9e',
    marginBottom: 10,
    elevation: 2,
  },
  registerButtonText: {
    fontSize: 14,
    color: '#fff',

    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',

    height: '100%',
    backgroundColor: '#033c9e',
  },

  loginButtonText: {
    fontSize: 14,
    color: '#033c9e',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  welcomeImage: {
    maxHeight: 200,
    padding: 10,
    resizeMode: 'contain',
  },
});

export default WelcomeAuth;
