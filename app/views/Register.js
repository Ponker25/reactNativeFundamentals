import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage } from 'react-native';

export class Register extends React.Component {

    static navigationOptions = {
        header: null
    };
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwrd: '',
            passwrdConfirm: ''
        };
    };

    cancelRegister = () => {
        Alert.alert('Registration cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    registerAccount = () => { 
        if ( !this.state.username ) {
            Alert.alert('Please enter a username')
        }
        else if (this.state.passwrd !== this.state.passwrdConfirm) {
            Alert.alert('Passwords do not match')
        }
        else {
            AsyncStorage.getItem(this.state.username, (err, result) => {
                if (result!==null){
                    Alert.alert(`${this.state.username} already exists`);
                }
                else{
                    AsyncStorage.setItem(this.state.username,this.state.passwrd, (err, result) => {
                        Alert.alert(`${this.state.username} account created`);
                        this.props.navigation.navigate('HomeRT');
                    });
                }
            });
        }
        
    }

    render() {
        return (
           <View style={styles.container}>
                <Text style={styles.heading}>Register Account</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />
                <Text style={styles.labels}>Enter Username</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrd: text})}
                    value={this.state.passwrd}
                    secureTextEntry={true}
                />
                <Text style={styles.labels}>Enter Password</Text>

                <TextInput 
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({passwrdConfirm: text})}
                    value={this.state.passwrdConfirm}
                    secureTextEntry={true}
                />
                <Text style={styles.labels}>Confirm Password</Text>

                <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
                    <Text style= {styles.buttons}>
                        Register
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
                    <Text style= {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
           </View> 
        )}
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        paddingTop: '10%'
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 26,
        paddingBottom: 10
    },
    inputs: {
        width: '80%',
        backgroundColor: 'rgba(0, 0, 0,.111)',
        borderRadius: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingTop: '5%',
        paddingLeft: 15
    },
    buttons: {
        backgroundColor: 'rgba(0, 0, 0,.111)',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        borderColor: 'rgba(0, 0, 0,.111)',
        borderWidth: 4,
        borderRadius: 5,
    },
    labels: {
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 16
    }
});