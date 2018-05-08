
function loadAnswers() {
	$("#Answers").remove();
	var user = firebase.auth().currentUser;
	if(user == null){
		return;
	}
	var path = createPath([normalizeEmail(user.email), "results", "choosing_words"]);
	appendAnswers(path);
}

function appendAnswers(path){
	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	var allAnswers = 0;
	var refAnswers = getFromDb(path);
	refAnswers.on("value", function(snapshot) {
				snapshot.forEach(element => {
					$( "#Answerstable" ).append("<tr class =\"wordsrow\"> <td>" + element.val().answer + "</td> <td>"
				+ element.val().word + "</td>  <td> <button onclick=\"deleteWord('"+element.key+"');\"> usuń </button> </td> </tr> ");
				
				if(element.val().answer == true){
					 correctAnswers += 1;
				} else { 
					inCorrectAnswers += 1;
				}
					allAnswers += 1;
				});
			  }, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });
			  
			  console.log("correct:" + correctAnswers + "incorrect:" + inCorrectAnswers + "all:" + allAnswers);
}



