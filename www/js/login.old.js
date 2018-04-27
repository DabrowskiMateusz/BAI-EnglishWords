function onSignIn(googleUser) {
	
	var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  
	
  console.log('Google Auth Response', googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = firebase.auth().onAuthStateChanged(function(firebaseUser) {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.getAuthResponse().id_token);
      // Sign in with credential from the Google user.
      firebase.auth().signInWithCredential(credential).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    } else {
      console.log('User already signed-in Firebase.');
    }
  });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}



function loginGoogle() {
    window.plugins.googleplus.login(
        {
                 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
                 'offline': true
        },
        function (obj) {
            document.querySelector("#image").src = obj.imageUrl;
            document.querySelector("#image").style.visibility = 'visible';
            document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
            if (!firebase.auth().currentUser) {
                document.querySelector("#feedback").innerHTML ='signing firebase';
                firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
                .then((success) => {
                    console.log("success: " + JSON.stringify(success)); // to long json to put it in #feedback
                })
                .catch((error) => {
                        document.querySelector("#feedback").innerHTML = "error0: " + JSON.stringify(error);
                      });
            }else{
                document.querySelector("#feedback").innerHTML ='error1: already sigend in firebase';
            }
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error2: " + msg;
        }
    );
  }
  
function isAvailable() {
	window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
}
  
function trySilentLogin() {
window.plugins.googleplus.trySilentLogin(
	{
			 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
			 'offline': true
	},
	function (obj) {
	  document.querySelector("#image").src = obj.imageUrl;
	  document.querySelector("#image").style.visibility = 'visible';
	  document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = "error: " + msg;
	}
);
}
  
function logout() {
window.plugins.googleplus.logout(
	function (msg) {
	  document.querySelector("#image").style.visibility = 'hidden';
	  document.querySelector("#feedback").innerHTML = msg;
	  if(firebase.auth().currentUser){
		document.querySelector("#feedback").innerHTML ='signing out from firebase';
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	}
);
}
  
function disconnect() {
window.plugins.googleplus.disconnect(
	function (msg) {
	  document.querySelector("#image").style.visibility = 'hidden';
	  document.querySelector("#feedback").innerHTML = msg;
	  if(firebase.auth().currentUser){
		document.querySelector("#feedback").innerHTML ='signing out from firebase';
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	}
);
}
  
window.onerror = function(what, line, file) {
	alert(what + '; ' + line + '; ' + file);
};
  
function handleOpenURL (url) {
	document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
}













function loginGoogle() {
    window.plugins.googleplus.login(
        {
                 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
                 'offline': true
        },
        function (obj) {
            document.querySelector("#image").src = obj.imageUrl;
            document.querySelector("#image").style.visibility = 'visible';
            document.querySelector("#feedback").innerHTML = "Hi, " + obj.displayName + ", " + obj.email;
            if (!firebase.auth().currentUser) {
                document.querySelector("#feedback").innerHTML ='signing firebase';
                firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(obj.idToken))
                .then((success) => {
                    console.log("success: " + JSON.stringify(success)); // to long json to put it in #feedback
                })
                .catch((error) => {
                        document.querySelector("#feedback").innerHTML = "error0: " + JSON.stringify(error);
                      });
            }else{
                document.querySelector("#feedback").innerHTML ='error1: already sigend in firebase';
            }
        },
        function (msg) {
          document.querySelector("#feedback").innerHTML = "error2: " + msg;
        }
    );
  }
  
function isAvailable() {
	window.plugins.googleplus.isAvailable(function(avail) {alert(avail)});
}
  
function trySilentLogin() {
window.plugins.googleplus.trySilentLogin(
	{
			 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
			 'offline': true
	},
	function (obj) {
	  document.querySelector("#image").src = obj.imageUrl;
	  document.querySelector("#image").style.visibility = 'visible';
	  document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = "error: " + msg;
	}
);
}
  
function logout() {
window.plugins.googleplus.logout(
	function (msg) {
	  document.querySelector("#image").style.visibility = 'hidden';
	  document.querySelector("#feedback").innerHTML = msg;
	  if(firebase.auth().currentUser){
		document.querySelector("#feedback").innerHTML ='signing out from firebase';
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	}
);
}
  
function disconnect() {
window.plugins.googleplus.disconnect(
	function (msg) {
	  document.querySelector("#image").style.visibility = 'hidden';
	  document.querySelector("#feedback").innerHTML = msg;
	  if(firebase.auth().currentUser){
		document.querySelector("#feedback").innerHTML ='signing out from firebase';
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	}
);
}
  
window.onerror = function(what, line, file) {
	alert(what + '; ' + line + '; ' + file);
};
  
function handleOpenURL (url) {
	document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
}






function logoutf() {
window.plugins.googleplus.logout(
	function (msg) {
	  if(firebase.auth().currentUser){
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	 console.log(msg);
	}
);

function disconnect() {
window.plugins.googleplus.disconnect(
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	  if(firebase.auth().currentUser){
		document.querySelector("#feedback").innerHTML ='signing out from firebase';
		firebase.auth().signOut();
	  }
	},
	function (msg) {
	  document.querySelector("#feedback").innerHTML = msg;
	}
);
}


  
function handleOpenURL (url) {
	document.querySelector("#feedback").innerHTML = "App was opened by URL: " + url;
}


firebase.auth().getRedirectResult().then(function(result) {
			  if (result.credential) {
				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = result.credential.accessToken;
			  }
			  // The signed-in user info.
			  var user = result.user;
			  console.log(user);
			}).catch(function(error) {
			  // Handle Errors here.
			  var errorCode = error.code;
			  var errorMessage = error.message;
			  // The email of the user's account used.
			  var email = error.email;
			  console.log(email);
			   console.log(errorCode);
			  // The firebase.auth.AuthCredential type that was used.
			  var credential = error.credential;
			  // ...
			});
			
			



