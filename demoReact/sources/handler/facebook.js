
import {fbLoginPermissions} from '../constants/index'
import FireBaseConfig from '../config/FirebaseConfig'
import AuthConfig from '../config/AuthConfig'

export const handleFbLogin = () => (
  Auth.Facebook.login(fbLoginPermissions)
    .then((token) => {
      firebase.auth()
        .signInWithCredential(firebase.auth.FacebookAuthProvider.credential(token))
    })
    .catch((err) => this.onError && this.onError(err))
);