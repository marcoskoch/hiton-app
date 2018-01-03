import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions,TextInput, TouchableOpacity,Image, Text } from 'react-native';
import    Topo          from './general/topo';
import    Menu          from './general/menu';
import    ImageProfile  from './general/imageProfile';
import    InputConfig   from './general/inputConfig';
import    TextConfig    from './general/textConfig';
import    SliderConfig  from './general/sliderConfig';
import    SideMenu      from 'react-native-side-menu';

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
          <InputConfig title={"Nome"} />
          <InputConfig title={"Email"} />
          <TextConfig title={"Facebook"} />
          {lineProfile()}
          <SliderConfig title={"Idade"} />
          </View>
        </View>
      </SideMenu>
    );
  }
}

const lineProfile = () => {
  return (
    <View style={styles.positionLine}>
    </View>
  );
}

const photoProfile = () => {
  return (
    <View style={styles.positionPhoto}>
      <ImageProfile/>
      <Text style={styles.textImage}> Alterar Foto do perfil </Text>
    </View>
  );
}

const nomeProfile = () => {
  return (
    <View style={styles.positionInput}>
      <Text style={styles.titleInput}>Nome</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Nome"
      />
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
    paddingTop:10,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
  },
  positionLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3'
  },
  textImage: {
    color: primaryColor,
    marginTop: 5,
    marginBottom:15
  }
});
