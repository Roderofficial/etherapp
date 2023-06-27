import React from 'react';
import {View, Text} from 'react-native';
import authService from '../../api/user/authService';

export default class ScreenChecker extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    console.log(props);
  }

  async componentDidMount() {
    const isLogged = await authService.loggedIn();
    if (!isLogged) {
      this.props.navigation.replace('WelcomeAuth');
    } else {
      this.props.navigation.replace('Tabs');
    }
  }

  render() {
    return null;
  }
}
