/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import ButtonComponent from './src/components/ButtonComponent';


type Props = {};
export default class App extends Component<Props> {
    buttonPressed = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Welcome to Unfollowers!</Text>
                <ButtonComponent onButtonPress={this.buttonPressed} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    headerText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5
    }
});
