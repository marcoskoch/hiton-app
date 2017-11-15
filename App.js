import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Topo></Topo>
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
