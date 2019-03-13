import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert, AsyncStorage  } from 'react-native';

export class Login extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            passwrd: ''
        };
    };

    cancelLogin = () => {
        Alert.alert('Login cancelled');
        this.props.navigation.navigate('HomeRT');
    };

    loginUser = () => {

        if ( !this.state.username) {
            Alert.alert('Please enter a username')
        }
        else if ( !this.state.passwrd) {
            Alert.alert('Please enter a password')
        }
        else AsyncStorage.getItem('userLoggedIn', (err, result) => {

            if (result!=='none') {
                Alert.alert('Someone is already logged on');
                this.props.navigation.navigate('HomeRT');
            }
            else{

                AsyncStorage.getItem(this.state.username, (err, result) => {

                    if (result!==null) {

                        if(result!==this.state.passwrd) {
                        Alert.alert('Password Incorrect')
                    }
                    else {
                        AsyncStorage.setItem('userLoggedIn', this.state.username, (err, result) => {
                            Alert.alert(`${this.state.username} Logged in`);
                            this.props.navigation.navigate('HomeRT');
                        });
                    }
                }
                    else {
                        Alert.alert(`No account for ${this.state.username}`)
                    }
                })
            }



        });



    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Login</Text>

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

                <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Login
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
                    <Text style = {styles.buttons}>
                        Cancel
                    </Text>
                </TouchableHighlight>
                

            </View>
        );
    }

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