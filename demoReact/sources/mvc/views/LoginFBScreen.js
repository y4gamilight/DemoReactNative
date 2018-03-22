import  React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import {fbLoginPermissions} from '../../constants/index'
import FireBaseConfig from '../../config/FireBaseConfig'
import AuthConfig from '../../config/AuthConfig'

export default class LoginFBScreen extends Component {
  
    clickedButtonFacebook() {
      alert("login facebook " + fbLoginPermissions)
      AuthConfig.logoutFacebook
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