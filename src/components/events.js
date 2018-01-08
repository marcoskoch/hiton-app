import React, { Component } from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  AsyncStorage } from 'react-native';
import {
  AccessToken,
  GraphRequest,
  GraphRequestManager } from 'react-native-fbsdk';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';


import  Topo      from './general/topo';
import  CardEvent from './general/cardEvent';
import  Menu      from './general/menu';
import  SideMenu  from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#FFFFFF';
const facebookToken = '';

const saveEvent = (navigate ,itemId, itemName) => {
  try {
    AsyncStorage.setItem('idEvent', itemId.toString());
    AsyncStorage.setItem('nameEvent', itemName.toString());
    navigate('QrCode');
  } catch (error) {
    Alert.alert(
      'Ops',
      'Tente novamente mais tarde!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
}







class Events extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      visibleLoading: true,
      listaItens: [],
      facebookToken: '',
      baseURL_1: 'https://graph.facebook.com/v2.11/tr3snh/events?since=1513777020&access_token=',
      baseURL_2: 'https://graph.facebook.com/v2.11/SenseClub-NH-353990601312933/events?since=1513777020&access_token=',
      baseURL_3: 'https://graph.facebook.com/v2.11/farmsbar/events?since=1513777020&access_token=',
      baseURL_4: 'https://graph.facebook.com/v2.11/innloungebarnh/events?since=1513777020&access_token=',
      baseURL_5: 'https://graph.facebook.com/v2.11/gruposambary/events?since=1513777020&access_token=',
      baseURL_6: 'https://graph.facebook.com/v2.11/maoribeachclub/events?since=1513777020&access_token=',
      baseURL_7: 'https://graph.facebook.com/v2.11/Provocateurpoa/events?since=1513777020&access_token='
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

  componentWillMount() {
    var listEvents = {};
    AsyncStorage.getItem("facebookToken").then((value) => {
        this.setState({"facebookToken": value});
        axios.get(this.state.baseURL_1+this.state.facebookToken).then(response => {
          this.setState({ listaItens: this.state.listaItens.push(response) });
          axios.get(this.state.baseURL_6+this.state.facebookToken).then(response => {
            this.setState({ listaItens: this.state.listaItens.push(response) });
            this.setState({ visibleLoading: false });
          }).catch(() => {
            console.log('Erro ao recuperar os dados');
          });
        }).catch(() => {
          console.log('Erro ao recuperar os dados');
        });
    }).done();
  }

  getImageEventFacebook(idEvent){
    axios.get('https://graph.facebook.com/v2.11/'+idEvent+'/picture?type=large&access_token=' + this.state.facebookToken.toString())
			.then(response => {
        return response.config.url;
      })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    const menu = <Menu navigation={this.props.navigation} />;
    const { navigate } = this.props.navigation;

    return (
      <SideMenu
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
        menu={menu}>
        <View style={styles.backgroundLogin}>
        <TouchableOpacity onPress={this.toggle}>
          <Topo title='Hit On' showMenu={true}/>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            <View style={{ flex: 1 }}>
              <Spinner visible={this.state.visibleLoading} textContent={"Carregando..."} color='#2d7bdc' textStyle={{color: '#2d7bdc'}} />
            </View>
            {this.state.listaItens.map(item => (
              <TouchableOpacity key  = {item.id} style={styles.positionText} onPress={() => saveEvent(navigate ,item.id, item.name)} >
                <CardEvent
                  item = {item}
                  urlImageEventFacebook = {this.getImageEventFacebook(item.id)}
                />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        </View>
      </SideMenu>
    );
  }
}

export default Events;

const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: primaryColor,
    flex: 1,
    flexDirection: 'column'
  }
});
