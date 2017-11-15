import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo'
import CardEvent from './src/components/cardEvent'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Topo></Topo>
        <CardEvent></CardEvent>
        <CardEvent></CardEvent>
        <CardEvent></CardEvent>
        <View style={styles.backgroundLogin}>
          <Text>Hit On</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: '#2d7bdc',
    flex: 1,
    flexDirection: 'row'
  }
});
