import React from 'react';
import {View, Text} from 'react-native';
import MyProfile from '../components/menu/MyProfile';
import Logout from '../components/menu/logoutButton';

export default class Menu extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View>
        <Text>Menu</Text>
        <MyProfile />
        <Logout />
      </View>
    );
  }
}
