
var provider = new firebase.auth.GoogleAuthProvider();


function loginFirebase() {
	 $('#register').click(function() {

			var email = $('#userEmail');    
			var pass = $('#userPass');      

						if(email.val() && pass.val()){

				firebase.auth().createUserWithEmailAndPassword(email.val(), pass.val()).then(function(user){
					console.log('everything went fine');
					console.log('user object:' + user);
					//you can save the user data here.
				}).catch(function(error) {
					console.log('there was an error');
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode + ' - ' + errorMessage);
				});

			} else {
				console.log('fill in both fields');
			}  
		});
		
		 $('#login').click(function() {

			var email = $('#userEmail');    
			var pass = $('#userPass');      

						if(email.val() && pass.val()){

				firebase.auth().signInWithEmailAndPassword(email.val(), pass.val()).then(function(user){
					console.log('everything went fine');
					console.log('user object:' + user);
					//you can save the user data here.
				}).catch(function(error) {
					console.log('there was an error');
					var errorCode = error.code;
					var errorMessage = error.message;
					console.log(errorCode + ' - ' + errorMessage);
				});

			} else {
				console.log('fill in both fields');
			}  
		});
		
		$('#logingoogle').click(function() {
	
		provider.addScope('https://www.googleapis.com/auth/plus.login');

		firebase.auth().signInWithRedirect(provider);

	});
	
	
	
	$('#logingoogle2').click(function() {
				window.plugins.googleplus.login(
				{
				  'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
				  'webClientId': '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
				  'offline': true, // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
				},
				function (obj) {
				  alert(JSON.stringify(obj)); // do something useful instead of alerting
				},
				function (msg) {
				  alert('error: ' + msg);
				}
			);
	});
	
	
		
		$('#logout').click(function() {

			firebase.auth().signOut().then(function() {
			  // Sign-out successful.
			}, function(error) {
			  // An error happened.
			});
		
		});
		
		
}  

function loginFirebaseStatus() {
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
			// User is signed in.
			var displayName = user.displayName;
			var email = user.email;
			var emailVerified = user.emailVerified;
			var photoURL = user.photoURL;
			var isAnonymous = user.isAnonymous;
			var uid = user.uid;
			var providerData = user.providerData;
			console.log(displayName);
				console.log(email);
				console.log(user.emailVerified);
				$( "#loggedas" ).html(email);
				
		  } else {
			$( "#loggedas" ).html('user logged out');
		  }
		});
		
		firebase.auth().getRedirectResult().then(function(authData) {
			console.log(authData);
		}).catch(function(error) {
			console.log(error);
		});
}  


function login() {
    window.plugins.googleplus.login(
        {
                 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
                 'offline': false
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
			 'offline': false
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
  
function logoutf() {
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




  
  

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}



function isUserEqual(googleUser, firebaseUser) {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.getBasicProfile().getId()) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
}


  


function init() {
	loginFirebase();
	loginFirebaseStatus();
}



