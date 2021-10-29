import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { logo } from '../../assets'

export default class splash extends Component {

    componentDidMount(){
        setTimeout(()=>{
            this.props.navigation.replace('kalkulator')
        }, 3000)
    }
    render() {
        return (
            <View style={styles.logo}>
            <Image source = {logo}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'gray'
    }
})