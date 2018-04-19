function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function addNewWord() {
	$(".wordsrow").remove();
	var fieldsValues = {
		polish: $('#textarea1').val(),
		english:  $('#textarea2').val()
	  }
	
	var path = createPath([allUsers, wordLists, $('#selectlist').val()]);
	pushToDb(path, fieldsValues);

	$('#textarea1').val("");
	$('#textarea2').val("");

	$('#wordAddedStatus').text("Dodano nowe słowo!")
}

function deleteWord(key){
	var path = createPath([allUsers, wordLists, $('#selectlistShow').val(), key]);
	removeFromDb(path);
	$(".wordsrow").remove();
}
			
function showWordsList() {
	$(".wordsrow").remove();
	var path = createPath([allUsers, wordLists, $('#selectlistShow').val()]);
	var refWordlists = getFromDb(path);
	
	refWordlists.on("value", function(snapshot) {
				snapshot.forEach(element => {
					$( "#wordstable" ).append("<tr class =\"wordsrow\"> <td>" + element.val().polish + "</td> <td>"
				+ element.val().english + "</td>  <td> <button onclick=\"deleteWord('"+element.key+"');\"> usuń </button> </td> </tr> ");
				});
			  }, function (errorObject) {
				console.log("The read failed: " + errorObject.code);
			  });
}



