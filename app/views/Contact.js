import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../Sections/Header.js';
import { StackNavigator } from 'react-navigation'

export class Contact extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            msg: '',
            name: '',
            email: ''
        }
    }

    clearFields=()=> this.setState({name: '', msg: '', email: ''});

    sendMessage=()=> {
        Alert.alert(this.state.name, this.state.msg + '\n\n' + this.state.email);
        this.props.navigation.goBack();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate={navigate} message='Press to Login' />
                <Text style={styles.heading}>Contact Us</Text>
                
                <TextInput 
                    style={styles.inputs}
                    placeholder= {' Enter Name'}
                    onChangeText={(text)=> this.setState({name: text})}
                    value={this.state.name} 
                />
                <TextInput 
                    style={styles.multiInput}
                    placeholder= {'Enter Message'}
                    onChangeText={(text)=> this.setState({msg: text})}
                    value={this.state.msg}
                    multiline = {true}
                    numberOfLines = {4}
                />

                <TextInput 
                    style={styles.inputs}
                    placeholder= {'Enter Email'}
                    onChangeText={(text)=> this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%'
    },
    heading: {
        fontSize: 16,
        flex: 1
    },
    inputs: {
        flex: 1,
        width: '90%',
        paddingTop: 10,
        borderBottomWidth: 2,
        borderColor: 'black' 
    },
    multiInput: {
        flex: 2.5,
        width: '90%',
        paddingTop: 20,
        borderBottomWidth: 2,
        borderColor: 'black'
    },
    buttons: {
        marginTop: 15,
        fontSize: 16,
        borderWidth: 2,
        borderColor: 'red',
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'red',

    }
});