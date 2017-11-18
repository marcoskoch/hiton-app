import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';
const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class CardUser extends Component {
  render () {
    return (
      <View style={styles.cardView}>
          <View  style={styles.cardImage}>
            <Image
              style={styles.imageEvent}
              source={{uri: 'https://pbs.twimg.com/profile_images/414650084614471680/1rplm2_-.jpeg'}}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.nameTitle}>Bianca Furtado, 21</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 30,
    marginRight: 30,
    height: win.width-10
  },
  cardImage: {
    alignItems: 'center',
    height: win.width-60
  },
  imageEvent: {
    flex: 1,
    alignSelf: 'stretch',
    width:win.width-60,
    height:win.width-60
  },
  viewText: {
    flexDirection: 'row',
    margin: 5
  },
  nameTitle: {
    fontSize: 22,
    marginTop: 5,
    color: primaryColor
  }
});

export default CardUser;
