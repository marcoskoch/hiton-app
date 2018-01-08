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

import  Topo      from './general/topo';
import  CardEvent from './general/cardEvent';
import  Menu      from './general/menu';
import  SideMenu  from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#FFFFFF';
const facebookToken = '';

AccessToken.getCurrentAccessToken().then(
  (data) => {
    facebookToken = data.AccessToken;
  })

baseURL = 'https://graph.facebook.com/v2.11/tr3snh/events?access_token=EAACEdEose0cBAMSYBNvRxBtqJmtzt6ZCDr3XxH28QsBTS5lz1zCDZCc3lGtnUCP3vLkS5gecF55UIrEV14UmrDCxHdDCJA7ccKvazEXDszsQSUFI3MEkSF7mryopayBXPTVMoYk4hFEnb1BAyaGShAJchZBFnEiu91ZAZAYDyze9qpY13ZBmWOsZCZAZBmaOf974ZD';

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
      listaItens: []
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

    axios.get(baseURL)
			.then(response => { 
        this.setState({ listaItens: response.data.data });
      })
			.catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  getImageEventFacebook(idEvent){
    axios.get('https://graph.facebook.com/v2.11/'+idEvent+'/picture?type=large&access_token=EAACEdEose0cBAMSYBNvRxBtqJmtzt6ZCDr3XxH28QsBTS5lz1zCDZCc3lGtnUCP3vLkS5gecF55UIrEV14UmrDCxHdDCJA7ccKvazEXDszsQSUFI3MEkSF7mryopayBXPTVMoYk4hFEnb1BAyaGShAJchZBFnEiu91ZAZAYDyze9qpY13ZBmWOsZCZAZBmaOf974ZD')
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
