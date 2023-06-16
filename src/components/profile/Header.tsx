import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Button, Pressable} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import profileService from '../../api/user/profileService';

import {Image, Text, View} from 'react-native';

const Header = ({background, avatar}: any): JSX.Element => {
  const [user, setUser] = useState<any>({});

  const fetchUser = async () => {
    const user = await profileService.getUserProfileById(
      '648ad0a10d69ee45746fe469',
    );
    console.log(user);
    setUser(user);
  };

  useEffect(() => {
    fetchUser();
  }, [setUser]);

  return (
    <View>
      <View style={style.card}>
        <Image source={{uri: user.background}} style={style.background} />
        <View style={style.inside}>
          <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
            <View>
              <Image source={{uri: user.avatar}} style={style.avatar}></Image>
            </View>
            <View>
              {new Date(user.createdAt).getTime() >
              new Date().getTime() - 1000 * 60 * 60 * 24 * 7 ? (
                <View
                  style={{
                    margin: 10,
                    backgroundColor: '#ebebeb',
                    padding: 8,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: '#000'}}>👋 Nowy użytkownik</Text>
                </View>
              ) : null}
            </View>
          </View>

          <Text style={{marginTop: 15}}>
            {user.verified ? (
              <IoniconsIcon name="checkmark-circle" size={30} color="#0d47a1" />
            ) : null}
            <Text style={style.name}>
              {' '}
              {user.firstname} {user.lastname}
            </Text>
          </Text>
          <Text>
            <EntypoIcon name="code" size={15} color="#0d47a1" />
            <Text style={style.userTitle}> Software Developer</Text>
          </Text>
          {/* short informations, birth, observers, join date */}

          <View style={style.actionRow}>
            <Pressable onPress={() => null} style={style.actionButton}>
              <FontAwesomeIcon name="comment" size={20} color="#fff" />
              <Text style={style.actionButtonText}>Wiadomość</Text>
            </Pressable>
            <Pressable onPress={() => null} style={style.actionButton}>
              <FontAwesomeIcon name="user-plus" size={20} color="#fff" />
              <Text style={style.actionButtonText}>Dodaj znajomego</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  background: {
    height: 200,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,

    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    position: 'relative',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 5,

    borderColor: '#F5F5F5',
    padding: 5,
  },
  inside: {
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: -90,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  userTitle: {
    fontSize: 17,
    color: '#000',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#0d47a1',
    padding: 13,
    color: '#fff',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default Header;
