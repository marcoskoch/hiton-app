import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import    Topo from './general/topo';
import    Menu from './general/menu';

import SideMenu from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

export default class ListUser extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render() {
      const menu = <Menu />;

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        menu={menu}>
        <View style={styles.backgroundLogin}>
        <TouchableOpacity onPress={this.toggle}>
          <Topo title='Hit On' showMenu={true}/>
        </TouchableOpacity>
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
  }
});
