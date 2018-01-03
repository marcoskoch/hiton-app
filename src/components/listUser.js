import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import    Topo      from './general/topo';
import    Menu      from './general/menu';
import    CardUser  from './general/cardUser';
import    SideMenu  from 'react-native-side-menu';

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
          {listUser()}
        </ScrollView>
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
  }
});
