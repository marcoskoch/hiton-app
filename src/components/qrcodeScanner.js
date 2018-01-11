import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Dimensions,
  Vibration,
  Animated,
  Easing,
  View,
  AsyncStorage,
  Alert,
  Text
} from 'react-native';

import Camera from 'react-native-camera'
const primaryColor = '#2d7bdc';


export default class QRCodeScanner extends Component {
  static propTypes = {
    onRead: PropTypes.func.isRequired,
    reactivate: PropTypes.bool,
    reactivateTimeout: PropTypes.number,
    fadeIn: PropTypes.bool,
    showMarker: PropTypes.bool,
    customMarker: PropTypes.element,
    cameraStyle: PropTypes.any,
    topViewStyle: PropTypes.any,
    bottomViewStyle: PropTypes.any,
    topContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
    bottomContent: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
    ]),
  }

  static defaultProps = {
    onRead: () => (console.log('QR code scanned!')),
    reactivate: false,
    reactivateTimeout: 0,
    fadeIn: true,
    showMarker: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      scanning: false,
      fadeInOpacity: new Animated.Value(0),
      idEvent: ''
    }

    this._handleBarCodeRead = this._handleBarCodeRead.bind(this);
  }

  componentDidMount() {
    if (this.props.fadeIn) {
      Animated.sequence([
        Animated.delay(1000),
        Animated.timing(
          this.state.fadeInOpacity,
          {
            toValue: 1,
            easing: Easing.inOut(Easing.quad),
          },
        )
      ]).start();
    }
    AsyncStorage.getItem("idEvent").then((value) => {
      this.setState({ "idEvent": value });
    }).done();
  }

  _setScanning(value) {
    this.setState({ scanning: value });
  }

  _handleBarCodeRead(e) {
    if (!this.state.scanning) {
      this._setScanning(true);
      Vibration.vibrate();
      this.props.onRead(e)
      if (e.data == this.state.idEvent) {
        const { navigate } = this.props.navigation;
        navigate('ListUser');
      }
      if (this.props.reactivate) {
        setTimeout(() => (this._setScanning(false)), this.props.reactivateTimeout);
      }
    }
  }
  _renderCameraMarker() {
    if (this.props.showMarker) {
      if (this.props.customMarker) {
        return this.props.customMarker;
      } else {
        return (
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle} />
          </View>
        );
      }
    }
    return null;
  }

  _renderCamera() {
    if (this.props.fadeIn) {
      return (
        <Animated.View
          style={{
            opacity: this.state.fadeInOpacity,
            backgroundColor: 'transparent'
          }}>
          <Camera style={[styles.camera, this.props.cameraStyle]} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
            {this._renderCameraMarker()}
          </Camera>
        </Animated.View>
      )
    }
    return (
      <Camera style={[styles.camera, this.props.cameraStyle]} onBarCodeRead={this._handleBarCodeRead.bind(this)}>
        {this._renderCameraMarker()}
      </Camera>
    )
  }


  render() {
    return (
      <View style={[styles.mainContainer, this.props.containerStyle]}>
        {this._renderCamera()}
        <View style={styles.infoView}>
          <Text style={styles.textHelp}> Leia o Código QR Code do seu Evento!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

  },
  infoView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
    width: Dimensions.get('window').width,
    marginTop:Dimensions.get('window').height-110,
    height: 50,
  },
  textHelp: {
    color: "#FFFFFF",
    fontSize: 20
  },

  camera: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: Dimensions.get('window').height-110,
    width: Dimensions.get('window').width
  },

  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  rectangle: {
    height: 250,
    width: 250,
    borderWidth: 2,
    borderColor: '#00FF00',
    backgroundColor: 'transparent',
  },
})
