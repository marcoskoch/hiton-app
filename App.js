import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import ListUser from './src/components/listUser'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <ListUser></ListUser>
      </View>
    );
  }
}
