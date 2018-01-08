import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, Dimensions } from 'react-native';
import { MaskService } from 'react-native-masked-text';
import Moment from 'moment';
const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class CardEvent extends Component {
  constructor(props) {
    super(props);
    console.log(props.item.start_time);
    this.state = {
      date: MaskService.toMask('datetime', props.item.start_time, {
        format: 'DD/MM',
      }),
    };
  };

  render() {
    const item = this.props.item;
    return (
      <View style={styles.cardView}>
        <View style={styles.cardImage}>
          <Image
            style={styles.imageEvent}
            source={{ uri: 'https://graph.facebook.com/v2.11/'+item.id+'/picture?type=large&access_token=EAACEdEose0cBAMSYBNvRxBtqJmtzt6ZCDr3XxH28QsBTS5lz1zCDZCc3lGtnUCP3vLkS5gecF55UIrEV14UmrDCxHdDCJA7ccKvazEXDszsQSUFI3MEkSF7mryopayBXPTVMoYk4hFEnb1BAyaGShAJchZBFnEiu91ZAZAYDyze9qpY13ZBmWOsZCZAZBmaOf974ZD' }}
          />
        </View>
        <View style={styles.viewText}>
          <Text style={styles.dateTitle}>{this.state.date}</Text>
          <View>
            <Text numberOfLines={1} style={styles.nameTitle}>{item.name}</Text>
            <Text style={styles.localTitle}>{item.place.name} - Novo Hamburgo</Text>
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
    width: win.width - 20,
    height: 150
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
