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
  Alert,
} from 'react-native';
import authService from '../../../api/user/authService';

export default class LoginEmail extends React.Component<
  Readonly<any>,
  Readonly<any>
> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      buttonDisabled: false,
    };
  }

  sendCode = async () => {
    this.setState({buttonDisabled: true});
    const response: Response = await authService.getCode(this.state.email);
    this.setState({buttonDisabled: false});
    console.log(response);
    if (response.ok) {
      this.props.navigation.navigate('LoginCode', {email: this.state.email});
    } else {
      const jsonBody = await response.json();
      switch (jsonBody.message) {
        case 'USER_NOT_FOUND':
          Alert.alert(
            'Błąd',
            'Nie znaleziono użytkownika o podanym adresie e-mail',
          );
          break;
        default:
          Alert.alert('Błąd', 'Wystąpił nieznany błąd');
          break;
      }
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
          <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>
            Podaj swój adres e-mail
          </Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput
            style={style.emailInput}
            placeholder="E-mail"
            placeholderTextColor="#959595"
            textContentType="emailAddress"
            autoCapitalize="none"
            onChange={e => this.setState({email: e.nativeEvent.text})}
          />
        </View>
        <Pressable
          style={style.loginButton}
          onPress={() => {
            this.sendCode();
          }}
          disabled={this.state.buttonDisabled}>
          <Text>
            <Text style={style.loginButtonText}>Dalej</Text>
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
