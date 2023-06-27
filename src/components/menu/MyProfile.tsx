import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import profileService from '../../api/user/profileService';
import {getAvatarSource} from '../../hooks/getAvatarSource';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import backgroundSource from '../../hooks/getBackgroundSource';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default class MyProfile extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.state = {
      profile: {},
      loading: true,
    };
  }

  getProfile = async () => {
    const profile = await profileService.getMe();
    this.setState({profile, loading: false});
  };

  componentDidMount() {
    this.getProfile();
  }

  render() {
    if (this.state.loading) {
      return <Text>Loading...</Text>;
    }
    return (
      <View style={style.card}>
        <Image
          source={backgroundSource(this.state.profile.background)}
          style={style.backgroundImage}
        />
        <View style={style.profileInner}>
          <Image
            source={getAvatarSource(this.state.profile.avatar)}
            style={style.image}
          />
          <Text style={{marginTop: 10}}>
            {this.state.profile.verified ? (
              <IoniconsIcon name="checkmark-circle" size={24} color="#0d47a1" />
            ) : null}
            <Text style={style.fullname}>
              {' '}
              {this.state.profile.firstname} {this.state.profile.lastname}
            </Text>
          </Text>
        </View>
        <ProfileButton userId={this.state.profile._id} />
      </View>
    );
  }
}

function ProfileButton(params: any) {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={{marginBottom: 20}}
      onPress={() =>
        navigation.navigate('Profile', {
          userId: params.userId,
        })
      }>
      <Text style={{color: '#0d47a1'}}>Zobacz swój profil</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 150,
    borderWidth: 2,
    borderColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#fff',
  },

  fullname: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#000',
  },
  profileInner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80,
    marginBottom: 20,
  },
});
