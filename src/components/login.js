import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image, TextInput, AsyncStorage } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class Login extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        AsyncStorage.setItem('facebookToken', data.accessToken);
        if(data != null)
          console.log(data);
          navigate('Events');
      })
    return (
      <View style={styles.backgroundLogin}>
        <View style={styles.positionLogo}>
          <Image style={styles.imageLogo}
            source={require('../assets/images/HIT-On.png')} />
        </View>
        <View style={styles.positionText}>
          <LoginButton
            publishPermissions={["email, user_birthday"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + result.error);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  console.log(arguments);
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      AsyncStorage.setItem('facebookToken', data.accessToken);
                      //post pra pegar o token da aplicacaos
                      //post salvar usuario
                      navigate('Events');
                    })
                }
              }
            }
            onLogoutFinished={() => alert("User logged out")} />
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
    marginTop: 150,
    alignItems: 'center'
  },
  positionText: {
    alignItems: 'center',
    marginTop: 35
  },
  imageLogo: {
    width: win.width / 2.5,
    height: win.width / 2.5
  }
});
