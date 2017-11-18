import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Login from './src/components/login'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Login></Login>
      </View>
    );
  }
}
