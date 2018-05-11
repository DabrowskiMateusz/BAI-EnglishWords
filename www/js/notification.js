document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
	
}

var wordPair = [];
var imageNotificationUrl = '';
var notificationId = 0;

function loadNextWordPairNotification(){
    wordPair = getRandomWordPairNotification();
}

function getRandomWordPairNotification(){
    var category = $('#selectlistNotification').val();
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


function getImageNotification(){
var keyword = wordPair[1];

    $(document).ready(function(){
		
        $.getJSON("https://api.flickr.com/services/rest/?method=flickr.photos.search&nojsoncallback=1",
        {
			api_key: "a584691224799fc3262f67f3c66ab074",
            text: keyword,
            format: "json",
			sort: "relevance",
			per_page: 1
        },
        function(data) {
        $.each( data.photos.photo, function( i, item ) {
          var url = 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
		   console.log(url);
		  imageNotificationUrl = url;
       });
	   
       });

    });
}

function notificationSet() {
	var howManyNotifications = ($( "#selectedHowMany" ).val());
	console.log(howManyNotifications);
	var minutes = 1000 * 60;
	var howoften =  (($( "#selectedHowOften" ).val()) * minutes * 60);
	
	
	var d = new Date();
	var y = d.getFullYear();
	var m = d.getMonth();
	var today = d.getDate();
	var year = y; 
	var month = m;  
	var day =  today; 
	var hours = ($( "#selectedHour" ).val());
		var date = new Date(year, month, day, hours).getTime();
		//var date = new Date().getTime();
		var dateFirst = new Date(year, month, day, hours);
		//var dateFirst = new Date();
		console.log(dateFirst);
	
	
	for (i = 0; i < howManyNotifications; i++) { 
	
	loadNextWordPairNotification();
	
	console.log(wordPair[0] + " " +  wordPair[1]);
	
	getImageNotification();
	
	notification(date);
	notificationId++;
	date = date + howoften;
   
	}
	
	$( "#notificationFeedback" ).html(
	'Ustawiono ' + howManyNotifications 
	+ ' powiadomień, pierwsze '  + dateFirst
	+ ' kolejne co ' + $( "#selectedHowOften" ).val()
	+ ' godzin '
	);
	
}

// funkcja służy do ustawienia powiadomienia zgodnie z zadanymi wartościami i interwałem
function notification(date) {
	
		cordova.plugins.notification.local.schedule({
			id: notificationId,
			title: "Słówko Polskie: " + wordPair[0],
			text: "Tłumaczenie: " + wordPair[1],
			at: date, // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
			attachments: [imageNotificationUrl],
			icon: "res://sndwhite.png",
			smallIcon:"res://sndwhite.png"
		});
}

//usuwanie wszystkich powiadomień.


function notificationRemove() {
	
	for (i = 0; i < notificationId; i++) { 
	
			cordova.plugins.notification.local.cancel(notificationId, function () {
			console.log("notification " + notificationId + " was cancelled");
			
			});
	
	}
	
	$( "#notificationFeedback" ).html('Wszystkie powiadomienia zostały usunięte');

}








