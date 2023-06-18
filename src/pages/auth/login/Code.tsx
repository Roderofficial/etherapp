import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from 'react-native';
import MaterialsIconsIcon from 'react-native-vector-icons/MaterialIcons';
import authService from '../../../api/user/authService';

export default class LoginCode extends React.Component<
  any,
  {email: string; code: string; disabledButton: boolean}
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: this.props.route.params.email,
      code: '',
      disabledButton: false,
    };
  }

  validateLogin = async () => {
    const response: Response = await authService.validateCode(
      this.state.email,
      this.state.code,
    );
    if (response.ok) {
      const data = await response.json();
      await authService.setToken(data.token);
      this.props.navigation.navigate('Tabs');
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={style.mainContainer}>
        <View style={{padding: 10, marginTop: 20}}>
          <Text
            style={{
              fontSize: 30,
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Logowanie
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontWeight: '500',
              textAlign: 'center',
            }}>
            Podaj kod logowania
          </Text>
          <Text style={{color: '#fff', marginTop: 20}}>
            Na wskazany adres E-mail został przesłany kod logowania. Wpisz go
            poniżej
          </Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput
            style={style.emailInput}
            placeholder="kod logowania"
            placeholderTextColor="#959595"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChange={e => this.setState({code: e.nativeEvent.text})}
          />
        </View>
        <Pressable
          style={style.loginButton}
          onPress={this.validateLogin}
          disabled={this.state.disabledButton}>
          <Text>
            <Text style={style.loginButtonText}>ZALOGUJ</Text>
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    backgroundColor: '#033c9e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headImage: {
    padding: 10,
    maxHeight: 200,
    resizeMode: 'contain',
  },
  emailInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 14,
    width: 300,
    elevation: 2,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#fff',
    color: '#000',
  },
  loginButton: {
    borderRadius: 5,
    padding: 14,
    color: '#033c9e',
    marginBottom: 10,
    elevation: 2,
    backgroundColor: '#fff',
  },
  loginButtonText: {
    fontSize: 14,
    color: '#033c9e',
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
  },
});
