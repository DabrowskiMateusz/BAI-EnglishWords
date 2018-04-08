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


// funkcja zapisująca dane do bazy firebase.

function addNewWord() {
  firebase.database().ref('wordlists/' + $('#selectlist').val()).push({
	word: $('#textarea1').val(),
  });
}

