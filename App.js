import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },

  },
  { initialRouteName: 'HomeRT' }
);
const AppContainer = createAppContainer(MyRoutes);

export default AppContainer;
