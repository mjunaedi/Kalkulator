
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class InputNomer extends Component {
    render() {
        const {value, handleOnPress} = this.props;

        return (
            <TouchableOpacity style={styles.container}
            onPress={() => handleOnPress(value)}> 
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 1,
        backgroundColor: '#fb8c00',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        color: '#000',
        fontSize: 25,
        fontWeight: 'bold'
    }
})