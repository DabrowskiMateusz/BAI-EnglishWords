
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
		firebase.auth().signInWithRedirect(provider).then(function() {
		  return firebase.auth().getRedirectResult();
		}).then(function(result) {
		  // This gives you a Google Access Token.
		  // You can use it to access the Google API.
		  var token = result.credential.accessToken;
		  // The signed-in user info.
		  var user = result.user;
		  // ...
		}).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		console.log(errorCode + ' - ' + errorMessage)
		});
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



