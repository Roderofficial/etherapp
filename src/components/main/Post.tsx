import React from 'react';
import {Text, View, ScrollView, StyleSheet, Image} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

interface Props {
  avatar: string;
  name: string;
  verified: boolean;
  id: string;
  content: string;
  autor_type: string;
  autor_id: string;
}

export default class Post extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={style.card}>
          <View style={style.cardHeader}>
            <View style={style.cardHeaderLeft}>
              <View>
                <Image
                  source={{
                    uri: 'https://about.getpet.pl/wp-content/uploads/2023/01/rpochopien_mini.png',
                  }}
                  style={style.avatar}
                />
              </View>
              <View>
                <Text style={style.name}>Radosław Pochopień</Text>
                <Text style={style.dateAdd}>2 hours ago</Text>
              </View>
            </View>
            <View style={style.cardHeaderRight}>
              <Text style={style.cardHeaderRightText}>
                <EntypoIcon
                  name="dots-three-horizontal"
                  size={17}
                  color="#525252"
                />
              </Text>
            </View>
          </View>

          {/* post content */}
          <View style={style.cardContent}>
            <Text style={style.cardContentText}>
              Cześć 🙂 Poszukuję pracy, ale tym razem... dla zespołu. Jako
              Bambit specjalizujemy się w tworzeniu aplikacji webowych o każdym
              stopniu skomplikowania. Mamy na swoim koncie zarówno mniejsze
              realizacje przystosowane do potrzeb indywidualnych klienta, jak i
              projekty zrealizowane dla takich marek jak Żabka, czy Orbit.
              Oferujemy obsługę end to end od projektu do implementacji,
              wdrożenia i utrzymania.
            </Text>
          </View>
        </View>
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardHeaderRight: {
    paddingRight: 4,
  },
  cardHeaderRightText: {
    fontSize: 20,
    fontWeight: '200',
    color: '#525252',
    verticalAlign: 'middle',
    textAlignVertical: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  name: {
    fontSize: 14,
    fontWeight: '900',
    color: '#000',
    paddingLeft: 10,
  },
  dateAdd: {
    fontSize: 12,
    fontWeight: '500',
    color: '#00090',
    paddingLeft: 10,
  },
  cardContent: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  cardContentText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    paddingBottom: 10,
  },
});
