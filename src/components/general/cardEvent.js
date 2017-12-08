import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';
const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class CardEvent extends Component {
  render () {
    const item = this.props.item;
    return (
      <View style={styles.cardView}>
          <View  style={styles.cardImage}>
          <Image
            style={styles.imageEvent}
            source={{ uri: item.photo }}
          />
          </View>
          <View style={styles.viewText}>
            <Text style={styles.dateTitle}>{item.dateStart}</Text>
            <View>
              <Text style={styles.nameTitle}>{item.name}</Text>
              <Text style={styles.localTitle}>{item.local} - {item.city}</Text>
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
