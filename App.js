import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ListUser from './src/components/listUser'
import Login from './src/components/login'

export const SimpleApp = StackNavigator({
  Login: { screen: Login },
  ListUser: { screen: ListUser },
});
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <SimpleApp />
      </View>
      );
  }
}
