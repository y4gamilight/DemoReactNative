import  React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class LoginFBScreen extends Component {
      render() {
        return (
          <View style={styles.container}>
          <Button title="Sign In with facebook" style={styles.buttonSignInFacebook}></Button>
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
   buttonSignInFacebook: {
        width: 200, 
        height: 48
    },
});