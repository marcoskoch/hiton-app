import React, { Component } from 'react';
import { View } from 'react-native';

import { StackNavigator } from 'react-navigation';
import ListUser from './src/components/listUser';
import Login from './src/components/login';
import Events from './src/components/events';
import ProfileUser from './src/components/profileUser';

export const SimpleApp = StackNavigator({
  Login:        { screen: Login },
  ListUser:     { screen: ListUser },
  Events:       { screen: Events },
  ProfileUser:  { screen: ProfileUser },
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
