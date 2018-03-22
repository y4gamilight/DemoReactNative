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
        this.state = {
            enableGoogleService: false,
            displayName:""
        }
    }

    updateMessage(value) {
        this.setState ({
            errorSignIn: value
        }); 
    }

    checkEnableGoogleService() {
        GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
              // play services are available. can now configure library
                this.updateMessage(true) 
             })
        .catch((err) => {
            let errorMessage = err.message.toString();
            this.updateMessage(errorMessage)
            return err
         })
    }
    signInGoogle() {
        this.checkEnableGoogleService;
        GoogleSignin.signIn()
        .then((user) => {
            if(user) {
                console.log(user);
            } else {
                console.log("Cancel");
            }
          
        })
        .catch((err) => {
            let errorMessage = (err) => {
                this.updateMessage(err)
            };
            console.log('WRONG SIGNIN', err);
          throw err
        })
        .done();
    }

    configurationIOS() {
        GoogleSignin.configure({
            iosClientId: "762353163795-13bd86erv4297jqq6nlmhejp5b28e1mh.apps.googleusercontent.com", // only for iOS
        }).then(() => {
            // you can now call currentUserAsync()
            this.checkAsyncAccount()
        });
    }
    
    checkAsyncAccount() {
        GoogleSignin.currentUserAsync().then((user) => {
            if (user != null) {
                this.setState({
                    user: user,
                    displayName: user.name
                });
            }
        }).done();
    }

    //Lifecycle
    componentWillMount() {
        this.configurationIOS()
    }
    
    

    render() {
        return (
            <View style={styles.main}>
                <GoogleSigninButton  style={styles.buttonSignInGoogle} size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}  onPress={this.signInGoogle}/>
                    <Text>User name: {this.state.displayName}</Text>
                    <Text>Error login: {this.state.errorSignIn}</Text>
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

    buttonSignInGoogle: {
        width: 200, 
        height: 48
    },
    
  });