import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class LoginScreen extends Component {
    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading/>;
        }
        return(
            <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
                }}>
                <Button 
                title="Sign in with Google"
                onPress={() => this.signInWithGoogleAsync()}></Button>
                </View>     
        )
    }
}