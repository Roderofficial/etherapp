import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import authService from '../../api/user/authService';
import {useNavigation} from '@react-navigation/native';

export default function Logout(): JSX.Element {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          authService.logout();
          navigation.replace('WelcomeAuth');
        }}
        style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Wyloguj</Text>
        </View>

        <View style={styles.headerRow}>
          <AntDesignIcon name="logout" size={25} color="#fff" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#770909',
    elevation: 2,
    margin: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerRow: {},
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
