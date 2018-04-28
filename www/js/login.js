
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
			 window.plugins.googleplus.login(
        {
                 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
                 'offline': true
        },
        function (obj) {
		
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
	
	});
	
	$('#loginfacebook').click(function() {

	facebookConnectPlugin.login(["public_profile","email"],function(result){
    //calling api after login success
     facebookConnectPlugin.api("/me?fields=email,name,picture",
     ["public_profile","email"]
     ,function(userData){
         //API success callback
         alert(JSON.stringify(userData));
      },function(error){
         //API error callback
         alert(JSON.stringify(error));
      });
   },function(error){
      //authenication error callback
      alert(JSON.stringify(error));
     });
		
	
	});
	
	$('#loginfacebook2').click(function() {

		try {
			PackageInfo info = getPackageManager().getPackageInfo(
					"com.slowkonadzis.android",
					PackageManager.GET_SIGNATURES);
			for (Signature signature : info.signatures) {
				MessageDigest md = MessageDigest.getInstance("SHA");
				md.update(signature.toByteArray());
				Log.d("KeyHash:", Base64.encodeToString(md.digest(), Base64.DEFAULT));
			}
		} catch (PackageManager.NameNotFoundException e) {
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			e.printStackTrace();
		}
		
	
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
		
}  
 
  
function trySilentLogin() {
window.plugins.googleplus.trySilentLogin(
		{
				 'webClientId' : '244487661018-8rn0cmocvl4p549fsfm3ag6umrgfrfd8.apps.googleusercontent.com',
				 'offline': true
		},
		function (obj) {
			
		  document.querySelector("#feedback").innerHTML = "Silent hi, " + obj.displayName + ", " + obj.email;
		},
		function (msg) {
		  document.querySelector("#feedback").innerHTML = "error: " + msg;
		}
	);
}
  
  
window.onerror = function(what, line, file) {
	alert(what + '; ' + line + '; ' + file);
};
  


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



