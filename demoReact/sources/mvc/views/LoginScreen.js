import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin,GoogleSigninButton} from 'react-native-google-signin';

export default class LoginScreen extends Component {

    signInGoogle() {
        alert("google open")
    }

    render() {
        return (
            <View style={styles.main}>
                <GoogleSigninButton  style={styles.buttonSignInGoogle} size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}  onPress={this.signInGoogle}/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6666ff',
    },

    buttonSignInGoogle: {
        width: 200, 
        height: 48
    },
    
  });