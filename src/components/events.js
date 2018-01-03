import React, { Component } from 'react';
import { ScrollView, TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import  Topo      from './general/topo';
import  CardEvent from './general/cardEvent';
import  Menu      from './general/menu';
import  SideMenu  from 'react-native-side-menu';

const win = Dimensions.get('window');
const primaryColor = '#FFFFFF';

const listEvenstMock = [
  {
    id: 1,
    name: 'Set List',
    photo: 'https://s2.glbimg.com/QniQvR5D4_UJAEqkVKqFZtEZHBM=/s.glbimg.com/jo/g1/f/original/2014/12/14/620festa.jpg',
    local: 'Provocatour',
    city: 'Porto Alegre',
    state: 'RS',
    dateStart: '14/09',
    timeStart: '23:00:00',
    dateEnd: '15/09',
    timeEnd: '05:00:00',
    qrCode: '2312313892'
  },
  {
    id: 2,
    name: 'Deck com Sambary',
    photo: 'https://s2.glbimg.com/QniQvR5D4_UJAEqkVKqFZtEZHBM=/s.glbimg.com/jo/g1/f/original/2014/12/14/620festa.jpg',
    local: 'Três',
    city: 'Novo Hamburgo',
    state: 'RS',
    dateStart: '14/09',
    timeStart: '22:30:00',
    dateEnd: '15/09',
    timeEnd: '05:30:00',
    qrCode: '2312139237'
  },
  {
    id: 3,
    name: 'Funk U',
    photo: 'https://s2.glbimg.com/QniQvR5D4_UJAEqkVKqFZtEZHBM=/s.glbimg.com/jo/g1/f/original/2014/12/14/620festa.jpg',
    local: 'Arena do Grêmio',
    city: 'Porto Alegre',
    state: 'RS',
    dateStart: '15/09',
    timeStart: '13:30:00',
    dateEnd: '16/09',
    timeEnd: '02:00:00',
    qrCode: '9854830275'
  }
];

const listEvents = () => {
  return (
    <View>
      {listEvenstMock.map(item => (
        <CardEvent
        key   = {item.id}
        item = {item}
        />
      ))}
    </View>
  );
}

class Events extends Component {
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
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {listEvents()}
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
