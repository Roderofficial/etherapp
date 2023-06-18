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
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

export default class Notifications extends React.Component<any, any> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      //header with two rows
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Text style={styles.headerText}>Powiadomienia</Text>
          </View>
          <Pressable
            onPress={() => this.props.navigation.navigate('FriendsRequests')}>
            <View style={styles.headerRow}>
              <AntDesignIcon name="addusergroup" size={25} color="#545454" />
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    elevation: 2,
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
    color: '#545454',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
