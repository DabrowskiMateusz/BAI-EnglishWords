
function loadAnsewers() {
	$("#ansewers").remove();
	var user = firebase.auth().currentUser;
	if(user == null){
		return;
	}
	var path = createPath([normalizeEmail(user.email), "results", "choosing_words"]);
	appendAnsewers(path);
}

function appendAnsewers(path){
	var refAnsewers = getFromDb(path);
	refAnsewers.on("value", function(snapshot) {
				snapshot.forEach(element => {
					$( "#ansewerstable" ).append("<tr class =\"wordsrow\"> <td>" + element.val().ansewer + "</td> <td>"
				+ element.val().word + "</td>  <td> <button onclick=\"deleteWord('"+element.key+"');\"> usuń </button> </td> </tr> ");
				});
			  }, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });
}



