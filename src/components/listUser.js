import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  RefreshControl,
  AsyncStorage,
  Alert
} from 'react-native';
import axios from 'axios';

import Topo from './general/topo';
import Menu from './general/menu';
import CardUser from './general/cardUser';
import SideMenu from 'react-native-side-menu';
import Modal from 'react-native-modal'

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
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg' }
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
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg' }
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
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg' }
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
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033612.jpg' },
      { image: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033263.jpg' }
    ]
  }
];

export default class ListUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.toggle = this.toggle.bind(this);
    this.checkHit = this.checkHit.bind(this);
    this.state = {
      isOpen: false,
      showMenu: false,
      isModalVisible: false,
      refreshing: false,
      itemSelected: [],
      apiToken: '',
      profile_id: '',
      idEvent: '',
      nameEvent: ''
    };
  }

  componentWillMount() {

    var keys = ['idEvent', 'nameEvent', 'profile_id', 'apiToken'];

    AsyncStorage.multiGet(keys, (err, data) => {

      this.setState({
        idEvent: data[0][1],
        nameEvent: data[1][1],
        profile_id: data[2][1],
        apiToken: data[3][1]
      });

      const body = {
        "description": "descrição",
        "facebookId": this.state.idEvent,
        "name": this.state.nameEvent,
        "startDate": "2018-01-14T18:00:00-0200",
        "endDate": "2018-01-15T02:00:00-0200"
      }
      const api = {
        "Content-Type": "application/json",
        "Authorization": "bearer " + this.state.apiToken
      }
      axios.post(
          "http://159.89.33.119:3000/api/users/event/" + this.state.profile_id,
          body,
          {headers: api}
      ).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
        Alert.alert(
          'Ops',
          'Tente novamente mais tarde!',
          [
            {text: 'OK', onPress: () => this.props.navigation('Events')},
          ],
          { cancelable: false }
        )
      });
    });
    
  }

  _toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

  _onRefresh() {
    this.setState({ refreshing: true });
    fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  };

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
    header: null
  };

  checkHit() {
    // realizar um get com o id da pessoa curtida
    let isReciprocal = random_boolean = Math.random() >= 0.5;
    if (isReciprocal) {
      this.setState({ isModalVisible: !this.state.isModalVisible })
    }

  }


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
          <ScrollView
            contentContainerStyle={styles.contentContainer}
          /* refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          } */
          >
            <View>
              {listUserMock.map(item => (
                <CardUser
                  key={item.id}
                  item={item}
                  checkHit={this.checkHit}
                />
              ))}
            </View>
          </ScrollView>

          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles.container}>
              <Text style={styles.txtTitulo}>Deu Hit em Você!</Text>
              <View style={styles.cardImage}>
                <Image
                  style={styles.imageEvent}
                  source={{ uri: 'https://thumbs.dreamstime.com/b/retrato-exterior-do-ver%C3%A3o-da-menina-loura-consideravelmente-bonito-dos-jovens-mulher-bonita-que-levanta-na-mola-66033915.jpg' }}
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
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    alignItems: 'center',
    height: win.width - 60,
    backgroundColor: '#000000'
  },
  imageEvent: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width - 60,
    height: win.width - 60,
    opacity: 0.9
  },
  buttonBlue: {
    backgroundColor: primaryColor,
    width: 300,
    height: 40,
    borderRadius: 65,
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
