import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../components/profile/Header';
import FriendsList from '../components/profile/FriendsList';
import Post from '../components/main/Post';

const Profile = (): JSX.Element => {
  return (
    <ScrollView bounces={false}>
      <Header userId="6488bc17c64d44befbbf3dc8" />
      <FriendsList />
      <Post />
    </ScrollView>
  );
};

export default Profile;
