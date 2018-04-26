
$(document).ready(function() { 
    loadNextWordToChoose();
}); 

var currentValues;

function checkResult(){

}

function nextWord(){
    loadNextWordToChoose();
}

function loadNextWordToChoose(){
    currentValues = getNextSelection();
    $("#chooseWord").val(currentValues[0]);
    $("#first-option").val(currentValues[1]);
    $("#second-option").val(currentValues[2]);
    $("#third-option").val(currentValues[3]);
    $("#forth-option").val(currentValues[4]);
}

function getNextSelection(){
    var category = $('#selectlistChooseWord').val();
    var path = createPath([allUsers, wordLists, category]);
	var refWordlists = getFromDb(path);
	var pairs = [];
	refWordlists.on("value", function(snapshot) {
				snapshot.forEach(element => {
                    pairs.push([element.val().polish, element.val().english]);
				});
			  }, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });

    var numberOfWords = pairs.length;
    var wordPairNumber = Math.floor((Math.random() * numberOfWords));
    var selectedValues = pairs[wordPairNumber];
    pairs.splice(wordPairNumber, 1);
    selectedValues.push(getNextRandomIncorrect(pairs));
    selectedValues.push(getNextRandomIncorrect(pairs));
    selectedValues.push(getNextRandomIncorrect(pairs));
    return selectedValues;
}

function getNextRandomIncorrect(pairs){
    var numberOfWords = pairs.length;
    var wordPairNumber = Math.floor((Math.random() * numberOfWords));
    var incorrectValue = pairs[wordPairNumber][1];
    pairs.splice(wordPairNumber, 1);
    return incorrectValue;
}