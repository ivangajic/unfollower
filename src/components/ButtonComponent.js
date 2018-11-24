import React from 'react';
import {Button, StyleSheet} from "react-native";

const  buttonComponent = props => {
    return (
        <Button title="Press me!" style={styles.button} onPress={props.onButtonPress}/>
    );
}


const styles = StyleSheet.create({
    button: {
        width: 30
    }
});


export default  buttonComponent;