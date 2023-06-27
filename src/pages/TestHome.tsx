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
          title="Go to Profile Bożydar"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              userId: '648eff2181a26c6478cc320a',
            })
          }
        />

        <Button
          title="Go to Profile Roder"
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              userId: '648ad0a10d69ee45746fe469',
            })
          }
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
