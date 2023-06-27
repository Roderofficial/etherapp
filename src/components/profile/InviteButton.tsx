import React from 'react';
import {View, Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import friendshipService from '../../api/user/friendshipService';
import ActionSheet from 'react-native-actions-sheet';

export default class InviteButton extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userId: this.props.userId,
      loading: true,
      friendShipStatus: '',
      status: {
        INVITE: {
          backgroundColor: '#0d47a1',
          color: '#fff',
          text: 'Dodaj znajomego',
          action: async () => {
            await this.sendInvite();
          },
        },
        SENT: {
          backgroundColor: '#141414',
          color: '#fff',
          text: 'Zaproszenie wysłane',
          action: async () => {
            await this.cancelInvite();
          },
        },
        ACCEPT: {
          backgroundColor: '#e8b326',
          color: '#fff',
          text: 'Akceptuj zaproszenie',
          action: async () => {
            null;
          },
        },
        FRIENDS: {
          backgroundColor: '#ddd',
          color: '#000',
          text: 'Znajomi',
          action: async () => {
            null;
          },
        },
      },
    };
  }

  sendInvite = async () => {
    const response = await friendshipService.sendInvite(this.state.userId);
    console.log(response);
    if (response.ok) {
      this.setState({
        friendShipStatus: 'SENT',
      });
    }
  };

  cancelInvite = async () => {
    const response = await friendshipService.cancelInvite(this.state.userId);
    console.log(response);
    if (response.ok) {
      this.setState({
        friendShipStatus: 'INVITE',
      });
    }
  };

  loadFriendShipStatus = async () => {
    const response = await friendshipService.getFriendShipStatus(
      this.state.userId,
    );
    if (response.status === 200) {
      console.log('aaaaaaaaaaaaaaa');
      const friendShipStatus = await response.json();
      console.log(friendShipStatus, 'friendShipStatus');
      this.setState({
        friendShipStatus: this.FriendShipStatus(friendShipStatus),
        loading: false,
      });
    } else {
      this.setState({
        friendShipStatus: 'INVITE',
        loading: false,
      });
    }
  };

  FriendShipStatus = (responseObject: any | null): any => {
    if (responseObject === null) {
      return 'INVITE';
    }
    if (responseObject['status'] === 0) {
      if (responseObject['friend_one'] === this.state.userId) {
        return 'ACCEPT';
      } else {
        return 'SENT';
      }
    } else if (responseObject['status'] === 1) {
      return 'FRIENDS';
    } else if (responseObject['status'] === 2) {
      if (responseObject['friend_one'] === this.state.userId) {
        return 'INVITE';
      } else {
        return 'NOTHING';
      }
    }
    return 'NOTHING';
  };

  componentDidMount() {
    this.loadFriendShipStatus();
  }

  FriendButton = (): JSX.Element => {
    return (
      <Pressable
        style={[
          style.button,
          {
            backgroundColor:
              this.state.status[this.state.friendShipStatus]['backgroundColor'],
          },
        ]}
        onPress={() => {
          this.state.status[this.state.friendShipStatus]['action']();
        }}>
        <Text
          style={{
            color: this.state.status[this.state.friendShipStatus]['color'],
            fontSize: 11,
            fontWeight: 'bold',
          }}>
          {this.state.status[this.state.friendShipStatus]['text']}
        </Text>
      </Pressable>
    );
  };

  render() {
    if (this.state.loading) {
      return <Text> Loading</Text>;
    }
    if (this.state.friendShipStatus === 'NOTHING') {
      return null;
    }
    return this.FriendButton();
  }
}

const style = StyleSheet.create({
  button: {
    backgroundColor: '#0d47a1',
    padding: 13,
    color: '#fff',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
