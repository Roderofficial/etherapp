import React from 'react';

import {Text, View} from 'react-native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import EncryptedStorage from 'react-native-encrypted-storage';

export default class TestHome extends React.Component<any, {token: string}> {
  constructor(props: any | Readonly<{}>) {
    super(props);
    this.state = {
      token: '',
    };
  }

  async componentDidMount() {
    const token = await EncryptedStorage.getItem('token');
    this.setState({token: token as string});
  }

  render() {
    return (
      <View>
        <Text>TestHome</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />

        <Button
          title="Go to WelcomeAuth"
          onPress={() => this.props.navigation.navigate('WelcomeAuth')}
        />
        <Text>Token: {this.state.token}</Text>
      </View>
    );
  }
}
