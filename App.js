import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './app/views/Home';
import { Contact } from './app/views/Contact';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { Register } from './app/views/Register.js'
import { Login } from './app/views/Login';

import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';
import { Blog } from './app/views/Blog';
import { BlogDetail } from './app/views/BlogDetail';
import { About } from './app/views/About'

const MyRoutes = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },
    ContactRT: {
      screen: Contact
    },
    LessonsRT: {
      screen: Video
    },
    VideoDetailRT: {
      screen: VideoDetail
    },
    RegisterRT: {
      screen: Register
    },
    LoginRT: {
      screen: Login
    },
    QuizRT: {
      screen: Quiz
    },
    FinishRT: {
      screen: Finish
    },
    BlogRT: {
      screen: Blog
    },
    BlogDetailRT: {
      screen: BlogDetail
    },
    AboutRT: {
      screen: About
    }
  },
  { initialRouteName: 'HomeRT' }
);
const AppContainer = createAppContainer(MyRoutes);

export default AppContainer;
