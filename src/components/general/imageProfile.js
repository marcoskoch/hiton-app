import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions } from 'react-native';
const win = Dimensions.get('window');

export default class ImageProfile extends Component {
  state = {
      avatarSource: null,
      videoSource: null
    };
  render() {
    return (
      <View>
        <Image

          source={require('../../assets/images/user_photo.jpg')}
        />
      </View>
      <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
          { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
            <Image borderRadius={65}
              style={styles.imagePhoto}
              source={this.state.avatarSource} />
          }
          </View>
    );
  }
}

const styles = StyleSheet.create({
  imagePhoto: {
    width: win.width/3,
    height: win.width/3,
    borderWidth: 0.5,
    borderColor: '#7e7e7e'
  },
});
