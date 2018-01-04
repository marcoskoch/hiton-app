import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import ListUser from './src/components/listUser';
import Login from './src/components/login';
import Events from './src/components/events';
import ProfileUser from './src/components/profileUser';
import QrCode from './src/components/qrCode';

export const SimpleApp = StackNavigator({
  Events:       { screen: Events },
  ProfileUser:  { screen: ProfileUser },
  QrCode:       { screen: QrCode },
  Login:        { screen: Login },
  ListUser:     { screen: ListUser },


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
