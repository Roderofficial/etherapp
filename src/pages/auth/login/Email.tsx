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
      <KeyboardAvoidingView behavior="height" style={style.mainContainer}>
        <Image
          source={require('../../../assets/images/Authentication-rafiki.png')}
          style={style.headImage}
        />
        <View style={style.loginContainer}>
          <View>
            <Text
              style={{
                fontSize: 30,
                color: '#000',
                fontWeight: 'bold',
              }}>
              Logowanie
            </Text>
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                fontWeight: '400',
                marginBottom: 20,
              }}>
              Podaj swój adres e-mail
            </Text>
          </View>

          <View style={{width: '100%'}}>
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
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  mainContainer: {
    minHeight: '100%',
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  loginContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 20,
  },
  headImage: {
    padding: 10,
    height: 300,
    resizeMode: 'contain',
    width: '100%',
  },
  emailInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 14,
    width: '100%',
    elevation: 2,
    marginTop: 10,
    borderColor: '#fff',
    color: '#000',
    marginBottom: 20,
  },
  loginButton: {
    borderRadius: 5,
    padding: 14,
    color: '#033c9e',
    marginBottom: 10,
    elevation: 2,
    backgroundColor: '#045cbc',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    verticalAlign: 'middle',
  },
});
