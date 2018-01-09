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
      baseURL: [
        'https://graph.facebook.com/v2.11/tr3snh/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/SenseClub-NH-353990601312933/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/farmsbar/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/innloungebarnh/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/gruposambary/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/maoribeachclub/events?since='+this.getDataAtual()+'&access_token=',
        'https://graph.facebook.com/v2.11/Provocateurpoa/events?since='+this.getDataAtual()+'&access_token='
      ],
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
    AsyncStorage.getItem("facebookToken").then((value) => {

        this.setState({"facebookToken": value});

        this.state.baseURL.forEach((value) => {
          axios.get(value+this.state.facebookToken).then(response => {

            this.setState({ 
              listaItens: [...this.state.listaItens, ...response.data.data]
            });

            console.log(this.state.listaItens);
          }).catch(() => { console.log('Erro ao recuperar os eventos'); });
        });
        this.setState({ visibleLoading: false });
    }).done();

  }

  getImageEventFacebook(idEvent){
    axios.get('https://graph.facebook.com/v2.11/'+idEvent+'/picture?type=large&access_token=' + this.state.facebookToken.toString())
			.then(response => {
        return response.config.url;
      })
			.catch(() => { console.log('Erro ao recuperar as fotos'); });
  }

  getDataAtual = () => {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
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