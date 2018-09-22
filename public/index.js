var config = {
    apiKey: "AIzaSyAN5wLeUqjBccPdb6udNRd3Id1fJTjKZJk",
    authDomain: "pkonlinecv.firebaseapp.com",
    databaseURL: "https://pkonlinecv.firebaseio.com",
    projectId: "pkonlinecv",
    storageBucket: "pkonlinecv.appspot.com",
    messagingSenderId: "821018915945"
  };

  firebase.initializeApp(config);


var uname = document.getElementById('user');


var provider = new firebase.auth.GoogleAuthProvider();




firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
uname.innerHTML = user

  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});