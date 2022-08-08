import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from "firebase";    
import { useCardAnimation } from '@react-navigation/stack';

export default class LoadingScreen extends Component {

    componentDidMount() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('DashboardScreen')
            } else {
                this.props.navigation.navigate("LoginSceen")
            }
        })
    }
    render() {
        return(
            <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignments: "center"
                }}> 
                    <ActivityIndicator size="large"/>
                </View>     
        )
    }
}