import React from 'react';

import {Text, View} from 'react-native';
import {Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default class TestHome extends React.Component {
  constructor(props: any | Readonly<{}>) {
    super(props);
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
      </View>
    );
  }
}
