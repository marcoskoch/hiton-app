import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';
const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class CardEvent extends Component {
  render () {
    return (
      <View style={styles.cardView}>
          <View  style={styles.cardImage}>
            <Image
              style={styles.imageEvent}
              source={{uri: 'https://scontent.fpoa9-1.fna.fbcdn.net/v/t1.0-9/22814256_1146151832183032_8167596211832293615_n.jpg?oh=e408d73e7644839ccda3146d145a7d4f&oe=5AA32674'}}
            />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.dateTitle}>21/10</Text>
            <View>
              <Text style={styles.nameTitle}>Baile da Provoca</Text>
              <Text style={styles.localTitle}>Provocateur - Porto Alegre</Text>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardView: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    height: 200,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  },
  cardImage: {
    alignItems: 'center',
    height: 150
  },
  imageEvent: {
    flex: 1,
    alignSelf: 'stretch',
    width:win.width-20,
    height:150
  },
  viewText: {
    flexDirection: 'row',
    margin: 5
  },
  dateTitle: {
    fontSize: 36,
    color: primaryColor,
    marginRight: 10,
    marginLeft: 10
    // alignItems: 'flex-start'
  },
  nameTitle: {
    fontSize: 20,
    color: primaryColor
  },
  localTitle: {
    color: '#d6d7da'
  }
});

export default CardEvent;
