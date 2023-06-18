import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TestHome from '../pages/TestHome';
import {View, Image} from 'react-native';
import Notifications from '../pages/notifications/Notifications';
import Menu from '../pages/Menu';
import Search from '../pages/Search';
import Messages from '../pages/Messages';
import MaterialCommunityIconsIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default class Tabs extends React.Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.bar as any,
        }}>
        <Tab.Screen
          name="Home"
          component={TestHome}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? (styles.iconFocus as any) : null}>
                <MaterialCommunityIconsIcon
                  name="newspaper-variant-outline"
                  size={25}
                  color={focused ? '#fff' : '#545454'}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? (styles.iconFocus as any) : null}>
                <FeatherIcon
                  name="message-circle"
                  size={25}
                  color={focused ? '#fff' : '#545454'}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? (styles.iconFocus as any) : null}>
                <FeatherIcon
                  name="search"
                  size={25}
                  color={focused ? '#fff' : '#545454'}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? (styles.iconFocus as any) : null}>
                <MaterialCommunityIconsIcon
                  name="bell-outline"
                  size={25}
                  color={focused ? '#fff' : '#545454'}
                />
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Menu"
          component={Menu}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={focused ? (styles.iconFocus as any) : null}>
                <MaterialCommunityIconsIcon
                  name="menu"
                  size={25}
                  color={focused ? '#fff' : '#545454'}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}

const styles = {
  bar: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 2,
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    shadowOffset: {
      height: 0,
      width: 12,
    },
    shadowColor: '#000',
    shadowOpacity: 10,
    shadowRadius: 1,
  },
  iconFocus: {
    backgroundColor: '#005BBD',
    width: 60,
    height: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
