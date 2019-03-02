import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../Sections/Header.js';
import { Hero } from '../Sections/Hero.js';
import { Menu } from '../Sections/Menu.js';
import { StackNavigator } from 'react-native';
import nullthrows from 'nullthrows';

export class Home extends React.Component {
    static navigationOptions = {
        header: null    
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header message= 'Press to Login' />
                <Hero />
                <Menu navigate = { navigate } />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})