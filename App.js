import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={styles.topo}>
          <Text style={styles.txtTitulo}>Hit On</Text>
        </View>
        <View style={styles.backgroundLogin}>
          <Text>Hit On</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#2d7bdc',
    alignItems: 'center'
  },
  txtTitulo: {
    fontSize: 36,
    color: '#FFF',
    fontFamily: 'segoeuil'
  },
  backgroundLogin: {
    backgroundColor: '#2d7bdc',
    flex: 1,
    flexDirection: 'row'
  }
});
