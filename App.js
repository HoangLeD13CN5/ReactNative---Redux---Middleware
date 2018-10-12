/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import MainScreen from './screen/MainScreen';
import { Provider } from 'react-redux';
import configureStore from './store';

const store = configureStore();
const StackApp = createStackNavigator({
  Main: MainScreen
}, {
    initialRouteName: 'Main',
    navigationOptions: {
      header: null,
    }
  })

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StackApp />
      </Provider>
    );
  }
}