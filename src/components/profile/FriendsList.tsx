import React from 'react';
import {Text, View, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class FriendsList extends React.Component {
  constructor(props: any | Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <View style={style.card}>
        <Text style={style.card_title}>
          <Text>Znajomi</Text>
          <Text style={{fontSize: 12, color: '#000', paddingLeft: 20}}>
            {' '}
            (6)
          </Text>
        </Text>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            borderColor: '#F5F5F5',
            borderBottomWidth: 1,
          }}>
          {firends.map(friend => (
            <View
              key={friend.id}
              style={{
                width: '33%',
                height: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={{uri: friend.avatar}}
                style={{width: 60, height: 60}}
              />
              <Text style={{fontSize: 12, marginTop: 10, color: '#000'}}>
                {friend.firstname} {friend.lastname}
              </Text>
            </View>
          ))}
        </View>
        <Text style={style.showAll}>
          <Text>Pokaż wszystkich znajomych </Text>
          <FeatherIcon name="arrow-right" size={17} color="#000" />
        </Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    shadowRadius: 15,
    elevation: 10,
    position: 'relative',
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 20,
    paddingTop: 20,
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
  showAll: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
});

const firends = [
  {
    id: 1,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
  {
    id: 2,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
  {
    id: 3,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
  {
    id: 4,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
  {
    id: 5,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
  {
    id: 6,
    firstname: 'Jan',
    lastname: 'Kowalski',
    avatar:
      'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
  },
];
