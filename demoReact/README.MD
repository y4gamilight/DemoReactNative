1/ Install

 npm install react-native

 //Google library
npm install react-native-google-signin --save
react-native link react-native-google-signin


 2/Run iOS
 react-native run-ios



 3/Configuration
<script src="https://www.gstatic.com/firebasejs/4.11.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBWQWrit2ieaRs44EJe5Qhvp2RF-qwJCP0",
    authDomain: "testreactnative-767c8.firebaseapp.com",
    databaseURL: "https://testreactnative-767c8.firebaseio.com",
    projectId: "testreactnative-767c8",
    storageBucket: "testreactnative-767c8.appspot.com",
    messagingSenderId: "762353163795"
  };
  firebase.initializeApp(config);
</script>

 - Login Facebook


 - Login Google

 4/Account