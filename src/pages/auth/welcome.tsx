import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';

const WelcomeAuth = (): JSX.Element => {
  return (
    <View>
      <View style={style.buttonContainer}>
        <Pressable
          onPress={() => null}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#0d47a1' : '#1565c0',
            },
            style.button,
          ]}>
          <Text style={style.buttonText}>Zaloguj się</Text>
        </Pressable>
        <Pressable
          onPress={() => null}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#0d47a1' : '#1565c0',
            },
            style.button,
          ]}>
          <Text style={style.buttonText}>Rejestracja</Text>
        </Pressable>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: 5,
    padding: 18,
    width: Dimensions.get('window').width - 50,
    elevation: 2,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',

    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default WelcomeAuth;
