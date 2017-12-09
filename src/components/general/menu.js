import React, { Component } from 'react';
import { Text, TouchableOpacity,View, StyleSheet, Dimensions, Image, TextInput, Button } from 'react-native';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

export default class Menu extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backgroundLogin}>
        <View style={styles.colorNavigation}>
        </View>
        <TouchableOpacity style={styles.positionTextEnd} onPress={() => navigate('ProfileUser')}>
          <Text style={styles.textEditar}>Editar</Text>
        </TouchableOpacity>
        <View style={styles.positionTextCenter}>
          <Text style={styles.textPerfil}>Meu Perfil</Text>
        </View>
        <View style={styles.positionPhoto}>
          <Image
            style={styles.imagePhoto}
            source={require('../../assets/images/user_photo.jpg')}
          />
        </View>
        <View style={styles.positionTextStart}>
          <Text style={styles.textTitle}>Idade</Text>
          <Text style={styles.textSubTitle}>Entre 18 e 25 Anos</Text>
          <Text style={styles.textTitle}>Gênero</Text>
          <Text style={styles.textSubTitle}>Feminino</Text>
        </View>
        <TouchableOpacity style={styles.positionTextMenu} onPress={() => navigate('ListUser')}>
          <Text style={styles.textTitle}>Meus Hits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.positionTextStart}>
          <Text style={styles.textTitle}>Configuração</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.positionTextStart} onPress={() => navigate('Login')}>
          <Text style={styles.textTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  colorNavigation: {
    backgroundColor: primaryColor,
    height:20
  },
  backgroundLogin: {
    backgroundColor: primaryColor,
    flex: 1,
    flexDirection: 'column'
  },
  positionPhoto: {
    marginTop: 20,
    alignItems: 'center'
  },
  positionTextEnd: {
    alignItems: 'flex-end',
    marginTop: 10,
    marginRight: 20
  },
  positionTextCenter: {
    alignItems: 'center',
    marginTop: 20
  },
  positionTextStart: {
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 20
  },
  positionTextMenu: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 20
  },
  imagePhoto: {
    width: win.width/2.5,
    height: win.width/2.5,
    borderRadius: 100
  },
  textPerfil: {
    fontSize: 25,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
    // fontFamily: 'segoeuil'
  },
  textTitle: {
    fontSize: 20,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
    // fontFamily: 'segoeuil'
  },
  textSubTitle: {
    fontSize: 15,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
    // fontFamily: 'segoeuil'
  },
  textEditar: {
    fontSize: 15,
    color: '#FFF',
    justifyContent: 'flex-end'
    // fontFamily: 'segoeuil'
  },
});
