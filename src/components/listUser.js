import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TextInput, Button } from 'react-native';
import    Topo from './general/topo';
import    Menu from './general/menu';

import SideMenu from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

export default class ListUser extends Component {
  render() {
      const menu = <Menu />;

    return (
      <SideMenu menu={menu}>
        <View style={styles.backgroundLogin}>
          <Topo title='Hit On' showMenu={true}/>
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  },
  positionLogo: {
    marginTop: 50,
    alignItems: 'center'
  },
  positionText: {
    alignItems: 'center',
    marginTop: 15
  },
  imageLogo: {
    width: win.width/2.5,
    height: win.width/2.5
  },
  textEntrar: {
    fontSize: 30,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
    // fontFamily: 'segoeuil'
  },
  positionInput: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginTop: 15,
    width: 180,
    height: 40,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    paddingLeft: 10
  }
});
