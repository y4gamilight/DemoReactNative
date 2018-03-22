/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginScreen from './sources/mvc/views/LoginScreen'
import LoginFBScreen from './sources/mvc/views/LoginFBScreen'

export default class App extends Component {
  render() {
    return (
      <LoginFBScreen style={styles.container}>
       
      </LoginFBScreen>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});
