import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import NavigationBar from 'react-native-navbar';

class Title extends Component {
  render() {
    return (
      <View>
        <Text style={styles.txtTitulo}>Hit On</Text>
      </View>
    );
  }
}

class IconMenu extends Component {
  render() {
    return (
      <View style={styles.icon}>
        <Icon name="menu" size={18} color="#FFF" />
      </View>
    );
  }
}

class Topo extends Component {
  render() {
    return (
      <View>
        <NavigationBar style={{backgroundColor: '#2d7bdc'}}
          title={<Title/>}
          leftButton={<IconMenu/>}
        />
      </View>
    );
  }
}

export default Topo;

const styles = StyleSheet.create({
  txtTitulo: {
    fontSize: 30,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    // fontFamily: 'segoeuil'
  },
  icon: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
