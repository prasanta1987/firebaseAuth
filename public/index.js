var config = {
    apiKey: "AIzaSyAN5wLeUqjBccPdb6udNRd3Id1fJTjKZJk",
    authDomain: "pkonlinecv.firebaseapp.com",
    databaseURL: "https://pkonlinecv.firebaseio.com",
    projectId: "pkonlinecv",
    storageBucket: "pkonlinecv.appspot.com",
    messagingSenderId: "821018915945"
  };

  firebase.initializeApp(config);

firebase.auth().languageCode = 'en';

var uname = document.getElementById('user');
var uLogo = document.getElementById('ulogo');
var gLogin = document.getElementById('glogin');
var gLogOut = document.getElementById('glogout');

var provider = new firebase.auth.GoogleAuthProvider();

glogin.addEventListener('click', e=>{

	firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  	var token = result.credential.accessToken;
  // The signed-in user info.
  	var user = result.user;
	//console.log(user)

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
})

gLogOut.addEventListener('click', e=>{
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
})

firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		uname.innerHTML = user.displayName;
		userlogo = user.photoURL;
		uLogo.src = userlogo;
		console.log(user)
		gLogin.classList.add('hide')
		gLogOut.classList.remove('hide');
	} else {
		uname.innerHTML = 'Welcome Guest';
		uLogo.src = '';
		gLogOut.classList.add('hide');
		gLogin.classList.remove('hide');
	}
});

