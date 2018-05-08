
function loadAnswers() {
	$("#Answers").remove();
	//var user = firebase.auth().currentUser;
	var user = 'grawerjkgmailcom';
	if(user == null){
		return;
	}
	var path = createPath([user, "results", "choosing_words"]);
	appendAnswers(path);
}

function appendAnswers(path){

	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	var allAnswers = 0;
	var correctAnswersPercentage = 0;
	var refAnswers = getFromDb(path);
	refAnswers.on("value", function(snapshot) {
				snapshot.forEach(element => {
					
				if(element.val().answer == true){
					 correctAnswers += 1;
				} else { 
					inCorrectAnswers += 1;
				}
					allAnswers += 1;
				});
				console.log("correct:" + correctAnswers + "incorrect:" + inCorrectAnswers + "all:" + allAnswers);
				
				var correctAnswersPercentage = (correctAnswers / allAnswers)*100;
				correctAnswersPercentage = (correctAnswersPercentage).toFixed(2);
				
				console.log("correctAnswersPercentage:" + correctAnswersPercentage);
				
				var elem = document.getElementById("progressBar"); 
				var width = 0;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 100) {
						clearInterval(id);
					} else {
						elem.style.width = correctAnswersPercentage + '%'; 
					}
				}
				
				$( "#correctAnswersPercentage" ).html("Procent poprawnych: " + correctAnswersPercentage);
				$( "#correctAnswers" ).html(correctAnswers);
				$( "#inCorrectAnswers" ).html(inCorrectAnswers);
				$( "#allAnswers" ).html(allAnswers);

			  } , function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });	    
}


  

