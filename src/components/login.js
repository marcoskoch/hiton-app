import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { createStore } from 'redux'

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class Login extends Component {
  static navigationOptions = {
    header:  null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.backgroundLogin}>
        <View style={styles.positionLogo}>
          <Image
            style={styles.imageLogo}
            source={require('../assets/images/HIT-On.png')}
          />
        </View>
        <TouchableOpacity style={styles.positionText} onPress={() => navigate('Events')}>
          <Text style={styles.textEntrar}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.positionInput}>
          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={(text) => this.setState({text})}
          />

        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  backgroundLogin: {
    backgroundColor: primaryColor,
    flex: 1,
    flexDirection: 'column'
  },
  positionLogo: {
    marginTop: 50,
    alignItems: 'center'
  },
  positionText: {
    alignItems: 'center',
    marginTop: 15
  },
  imageLogo: {
    width: win.width/2.5,
    height: win.width/2.5
  },
  textEntrar: {
    fontSize: 30,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
    // fontFamily: 'segoeuil'
  },
  positionInput: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginTop: 15,
    width: 180,
    height: 40,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    paddingLeft: 10
  }
});
