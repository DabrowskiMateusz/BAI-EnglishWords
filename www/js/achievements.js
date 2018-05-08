
function loadAnswers() {
	//var user = firebase.auth().currentUser;
	var user = 'grawerjkgmailcom';
	if(user == null){
		return;
	}
	var path = createPath(['grawerjkgmailcom', "results", "choosing_words"]);
	appendAnswers(path);
	
}

function createProgressBar(correctAnswersPercentage){
	var elem = document.getElementById("progressBar"); 
				var width = 0;
				var id = setInterval(frame, 10);
				function frame() {
					if (width >= 100) {
						
					} else {
						elem.style.width = correctAnswersPercentage + '%'; 
					}
				}
}



function appendAnswers(path){

	var correctAnswers = 0;
	var inCorrectAnswers = 0;
	var allAnswers = 0;
	var correctAnswersPercentage = 0;
	var refAnswers = getFromDb(path);
	refAnswers.once("value", function(snapshot) {
				snapshot.forEach(element => {
					
				if(element.val().answer == true){
					 correctAnswers += 1;
				} else { 
					inCorrectAnswers += 1;
				}
					allAnswers += 1;
				});
				console.log("correct:" + correctAnswers + "incorrect:" + inCorrectAnswers + "all:" + allAnswers);
				
				correctAnswersPercentage = (correctAnswers / allAnswers)*100;
				correctAnswersPercentage = (correctAnswersPercentage).toFixed(2);
				
				console.log("correctAnswersPercentage:" + correctAnswersPercentage);
				
				
				if (correctAnswersPercentage <= 50){
						$( "#noticeProgress" ).html('Musisz jeszcze popracować!');
					} else {
						$( "#noticeProgress" ).html('Świetnie Ci idzie!');
					}
				
				$( "#correctAnswersPercentage" ).html(correctAnswersPercentage + " %");
				$( "#correctAnswers" ).html(correctAnswers);
				$( "#inCorrectAnswers" ).html(inCorrectAnswers);
				$( "#allAnswers" ).html(allAnswers);
				
				createProgressBar(correctAnswersPercentage);	
	
			  } , function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });
			  
}


  

