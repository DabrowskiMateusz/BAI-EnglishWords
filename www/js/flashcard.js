$("#card").flip({
    axis: 'y',
    trigger: 'manual'
  });

$(document).ready(function() { 
    loadNextWordPair();
}); 

var currentPair = [];

function flashcardClick(){
    var flip = $("#card").data("flip-model");
    if(flip.isFlipped){
        $("#card").flip(false);
        $("#frontContent").html("<div class='flashcardText'>"+ currentPair[1] +"</div>");
        
    }
    else{
        $("#card").flip(true);
        loadNextWordPair();
        $("#backContent").html("<div class='flashcardText'>"+ currentPair[0] +"</div>");
    }
}

function loadNextWordPair(){
    currentPair = getRandomWordPair();
}

function getRandomWordPair(){
    var category = $('#selectlistFlashcards').val();
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
    var selectedPair = pairs[wordPairNumber];
    return selectedPair;
}