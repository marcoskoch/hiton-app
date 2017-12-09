import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, TouchableOpacity,Image, Text } from 'react-native';
import    Topo      from './general/topo';
import    Menu      from './general/menu';
import    SideMenu  from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

export default class ProfileUser extends Component {
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
  static navigationOptions = {
    header:  null
  };
  render() {
    const menu = <Menu navigation={this.props.navigation} />;
    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        menu={menu}>
        <View style={styles.backgroundLogin}>
          <TouchableOpacity onPress={this.toggle}>
            <Topo title='Hit On' showMenu={true}/>
          </TouchableOpacity>
          <View>
          {photoProfile()}
          </View>
        </View>
      </SideMenu>
    );
  }
}

const photoProfile = () => {
  return (
    <View style={styles.positionPhoto}>
      <Image
        style={styles.imagePhoto}
        source={require('../assets/images/user_photo.jpg')}
      />
      <Text style={styles.colorTextImage}> Alterar Foto do perfil </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'column'
  },
  positionPhoto: {
    marginTop: 20,
    alignItems: 'center'
  },
  colorTextImage: {
    color: primaryColor
  },
  imagePhoto: {
    width: win.width/2.5,
    height: win.width/2.5,
    borderRadius: 100
  },
});
