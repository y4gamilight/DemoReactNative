import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {GoogleSignin,GoogleSigninButton} from 'react-native-google-signin';

export default class LoginScreen extends Component {
    constructor() {
        super()
        
    }

    checkEnableGoogleService() {
        let isEnable = false
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
              // play services are available. can now configure library
                isEnable = true     
             })
        .catch((err) => {
             console.log("Play services error", err.code, err.message);
             isEnable = false
         })
        return isEnable
    }
    signInGoogle() {
        if (this.checkEnableGoogleService() == true) {
            alert("OK fine")
        } else {
            alert("not good")
        }
    }

    configurationIOS() {
        GoogleSignin.configure({
            iosClientId: "762353163795-9l9q9is53sog11gu3kqvusdnv58aq3m1.apps.googleusercontent.com", // only for iOS
        }).then(() => {
            // you can now call currentUserAsync()
            checkAsyncAccount()
        });
    }
    
    checkAsyncAccount() {
        GoogleSignin.currentUserAsync().then((user) => {
            console.log('USER', user);
            this.setState({user: user});
        }).done();
    }

    //Lifecycle
    componentDidMount() {
        configurationIOS()
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