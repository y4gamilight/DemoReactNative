import  React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import facebook from '../../../sources/handler/facebook'
export default class LoginFBScreen extends Component {
  
    clickedButtonFacebook() {
      alert("login facebook " + facebook.fbLoginPermissions)
     
    }
  
   componentWillMount() {
    }
    
    
      render() {
        return (
          <View style={styles.main}>
          <Button title="Sign In with facebook" style={styles.buttonSignInFacebook} color="#3c50e8" onPress={this.clickedButtonFacebook}></Button>
          </View>
        );
        
      }
   componentDidMount() {
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
        height: 48,
        backgroundColor: '#F5FCFF',
    },
});

export const handleFbLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      firebase.auth()
        .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);