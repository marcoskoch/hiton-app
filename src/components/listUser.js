import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, TouchableOpacity, Text, Image } from 'react-native';
import    Topo      from './general/topo';
import    Menu      from './general/menu';
import    CardUser  from './general/cardUser';
import    SideMenu  from 'react-native-side-menu';
import    Modal     from 'react-native-modal'

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

const listUserMock = [
  {
    id: 1,
    name: 'Thais Santos',
    photo: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg',
    year: 21,
    chouseYou: false,
    youChouse: false,
    viewable: false,
    photos: [
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg'}
    ]
  },
  {
    id: 2,
    name: 'Samantha Rocha',
    photo: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg',
    year: 24,
    chouseYou: true,
    youChouse: false,
    viewable: false,
    photos: [
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg'}
    ]
  },
  {
    id: 3,
    name: 'Sabrina Julia Marques',
    photo: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg',
    year: 19,
    chouseYou: false,
    youChouse: true,
    viewable: true,
    photos: [
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg'}
    ]
  },
  {
    id: 4,
    name: 'Julia Stefen',
    photo: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg',
    year: 26,
    chouseYou: true,
    youChouse: true,
    viewable: true,
    photos: [
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg'},
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg'}
    ]
  }
];

const listUser = () => {
  return (
    <View>
      {listUserMock.map(item => (
        <CardUser
        key  = {item.id}
        item = {item}
        />
      ))}
    </View>
  );
}


export default class ListUser extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showMenu: false,
      isModalVisible: false,
      itemSelected: []
    };
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })

  toggle() {
    if (this.state.showMenu) {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    } else {
      const { navigate } = this.props.navigation;
      navigate('Events');
    }
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
          <Topo title='Hit On' showMenu={this.state.showMenu} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._toggleModal}>
         <Text>Show Modal</Text>
       </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {listUser()}
        </ScrollView>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.container}>
            <Text style={styles.txtTitulo}>Deu Hit em Você!</Text>
            <View style={styles.cardImage}>
              <Image
                style={styles.imageEvent}
                source={{uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg'}}
              />
            </View>
            <View style={styles.buttonBlue}>
                <Text style={styles.txtSubTitle}>Salve o número, para marcarem um hit</Text>
            </View>
            <View style={styles.buttonBlue}>
                <Text style={styles.txtSubTitle}>(51) 99986-9289</Text>
            </View>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text style={styles.txtReturn}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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

  container: {
    flex:1,
    marginTop:50,
    marginBottom: 50,
    marginLeft:25,
    marginRight:25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    alignItems: 'center',
    height: win.width-60,
    backgroundColor: '#000000'
  },
  imageEvent: {
    flex: 1,
    alignSelf: 'stretch',
    width:win.width-60,
    height:win.width-60,
    opacity: 0.9
  },
  buttonBlue: {
    backgroundColor: primaryColor,
    width: 300,
    height: 40,
    borderRadius:65,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitulo: {
    fontSize: 25,
    color: '#FFF',
    marginBottom: 25,
    //fontFamily: 'segoeuil'
  },
  txtSubTitle: {
    fontSize: 15,
    color: '#FFF'
    //fontFamily: 'segoeuil'
  },
  txtReturn: {
    fontSize: 15,
    marginTop: 15,
    color: '#FFF'
    //fontFamily: 'segoeuil'
  },
});
