import React , { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { modificaName, modificaEmail, modificaMaxYear, modificaMinYear, saveProfile } from '../actions/ProfileActions';

const win = Dimensions.get('window');
const primaryColor = '#2d7bdc';

class formProfile extends Component {

    _saveProfile() {
        const { name, email, minYear, maxYear } = this.props;

        this.props.saveProfile({ name, email, minYear, maxYear });
    }
    
    render(){
        return (
            <View>
                <View style={styles.positionInput}>
                    <Text style={styles.titleInput}>Nome</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    value={this.props.name}
                    onChangeText={texto => this.props.modificaName(texto) } 
                    />
                </View>
                <View style={styles.positionInput}>
                    <Text style={styles.titleInput}>E-mail</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="E-mail"
                    value={this.props.email}
                    onChangeText={texto => this.props.modificaEmail(texto) } 
                    />
                </View>
                <View style={styles.positionInput}>
                    <Text style={styles.titleInput}>Idade Mínima</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Idade Mínima"
                    value={this.props.minYear}
                    onChangeText={texto => this.props.modificaMinYear(texto) } 
                    />
                </View>
                <View style={styles.positionInput}>
                    <Text style={styles.titleInput}>Idade Máxima</Text>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Idade Máxima"
                    value={this.props.maxYear}
                    onChangeText={texto => this.props.modificaMaxYear(texto) } 
                    />
                </View>
                <TouchableOpacity style={styles.positionText} onPress={() => this._saveProfile()}>
                    <Text style={styles.textEntrar}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const lineProfile = () => {
    return (
        <View style={styles.positionLine}>
        </View>
    );
}

const styles = StyleSheet.create({
    
    positionLine: {
      borderBottomWidth: 1,
      borderBottomColor: '#d3d3d3'
    },
    positionInput: {
        flexDirection: 'row',
    },
    titleInput: {
        color: '#000000',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1
    },
    textInput: {
        color: '#000000',
        flex: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#d3d3d3'
    },
    textEntrar: {
        fontSize: 20,
        color: primaryColor,
        justifyContent: 'center',
        alignItems: 'center'
        // fontFamily: 'segoeuil'
    },
    positionText: {
        alignItems: 'center',
        marginTop: 15
      },
  });

const mapStateToProps = state => (
    {
        name: state.ProfileReducer.name,
        email: state.ProfileReducer.email,
        minYear: state.ProfileReducer.minYear,
        maxYear: state.ProfileReducer.maxYear
    }
)

export default connect(
    mapStateToProps, 
    { 
        modificaName, 
        modificaEmail, 
        modificaMaxYear,
        modificaMinYear,
        saveProfile 
    } 
)(formProfile);