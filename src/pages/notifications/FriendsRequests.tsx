import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import verification_icon from '../../hooks/verification_icon';
import {getAvatarSource} from '../../hooks/getAvatarSource';
import friendshipService from '../../api/user/friendshipService';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class FriendsRequests extends React.Component<any, any> {
  constructor(props: any | Readonly<{}>) {
    super(props);
    this.state = {
      requests: [],
      loading: true,
    };
  }

  accept_invite = (id: string) => {
    friendshipService.acceptInvite(id).then(response => {
      if (response.ok) {
        this.get_invites();
      }
    });
  };

  decline_invite = (id: string) => {
    friendshipService.rejectInvite(id).then(response => {
      if (response.ok) {
        this.get_invites();
      }
    });
  };

  get_invites = () => {
    friendshipService.getFriendsRequests().then(response => {
      console.log(response);
      if (response.ok) {
        response.json().then(requests => {
          console.log(requests);
          this.setState({
            requests,
            loading: false,
          });
        });
      }
    });
  };

  componentDidMount() {
    this.get_invites();
  }

  no_invites = () => {
    return (
      <View style={{padding: 10, opacity: 0.2}}>
        <FeatherIcon
          name="users"
          style={{fontSize: 100, textAlign: 'center'}}
          color="#000"
        />
        <Text style={{color: '#000', textAlign: 'center'}}>
          Brak oczekujących zaproszeń
        </Text>
      </View>
    );
  };

  invite_card = (
    id: string,
    name: string,
    avatar: string,
    verification: boolean,
    title: string | null | undefined,
  ): JSX.Element => {
    return (
      <View style={styles.card} key={id}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.avatar} source={getAvatarSource(avatar)} />
          <Pressable
            onPress={() =>
              this.props.navigation.navigate('Profile', {
                userId: id,
              })
            }>
            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>
                <Text>{verification ? verification_icon(20) : null}</Text>
                <Text>{name}</Text>
              </Text>
              {title ? <Text style={{color: '#000'}}>{title}</Text> : null}
            </View>
          </Pressable>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.accept_invite(id)}
            style={{
              backgroundColor: '#52b202',
              padding: 10,
              borderRadius: 10,
              marginRight: 10,
            }}>
            <Text style={{color: '#fff'}}>
              <EntypoIcon name="check" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.decline_invite(id)}
            style={{
              backgroundColor: '#b2102f',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text style={{color: '#fff'}}>
              <EntypoIcon name="cross" size={20} color="#fff" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.header_container}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
            Zaproszenia do znajomych
          </Text>
        </View>

        {this.state.requests.length > 0
          ? this.state.requests.map((request: any) => {
              return this.invite_card(
                request._id,
                request.firstname + ' ' + request.lastname,
                request.avatar,
                request.verification,
                request.title ? request.title : null,
              );
            })
          : this.no_invites()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header_container: {
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    position: 'relative',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,

    borderColor: '#F5F5F5',
    padding: 5,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});
