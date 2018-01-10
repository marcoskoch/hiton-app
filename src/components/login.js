import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image, TextInput, AsyncStorage } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import axios from 'axios';

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
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("Login failed with error: " + result.error);
                } else if (result.isCancelled) {
                  alert("Login was cancelled");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      AsyncStorage.setItem('facebookToken', data.accessToken);
                      axios.post('http://159.89.33.119:3000/api/auth/login', {
                        facebookToken: 'EAAcGJNjINQkBAOZBGoeq6v4kd4dSB4nSuGxZCfHpWfR8eDYjDeIJucstSlcvjxoyYT5FTsxeciwYCwHcjHZAN0cmGYbKBFikwXU3hZCF0PaLQrtGmSKbovG3uMAXNW6xPNmPa0aTyR5KgZCSTLxqRfzV4OMjvxWhnLQZAuR9R4bLpFGZBZAdysSi6y1dVd2pspQnrz5wkiooRAZDZD',
                      }).then(function (response) {
                        AsyncStorage.setItem('profile_name', response.data.user.name);
                        AsyncStorage.setItem('profile_email', response.data.user.email);
                        AsyncStorage.setItem('profile_photo', response.data.user.picture.data.url);
                        navigate('Events');
                        AsyncStorage.setItem('apiToken', data.accessToken);
                      }).catch(function (error) {
                        console.log(error);
                      });
                      //post pra pegar o token da aplicacaos
                      //post salvar usuario

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
