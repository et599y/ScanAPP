import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Camera from './screens/RN_Camera';
import ExpoScan from './screens/expoScan';

const Navigator = createStackNavigator({
  Home: {
    screen: Home,
    header:{visible:false},
    navigationOption:{
      title:'Home',
      header:null
    }
  },
  Camera: {
    screen: Camera
  },
  ExpoScan: {
    screen: ExpoScan
  }
})

export default createAppContainer(Navigator)
