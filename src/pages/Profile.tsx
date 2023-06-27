import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Header from '../components/profile/Header';
import FriendsList from '../components/profile/FriendsList';
import Post from '../components/main/Post';

function Profile({route}: any) {
  const {userId} = route.params;
  //
  return (
    <ScrollView bounces={false}>
      <Header userId={userId} />
      <FriendsList userId={userId} />
      <Post />
    </ScrollView>
  );
}

export default Profile;
