import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Dimensions, Image, TextInput } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

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
          <Image style={styles.imageLogo}
            source={require('../assets/images/HIT-On.png')}/>
        </View>

        <LoginButton
          publishPermissions={["publish_actions"]}
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
                    console.log(data);
                  })
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
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
