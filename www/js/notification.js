


function notifications() {
	 $('#notification').click(function() {  
	 
		cordova.plugins.notification.local.schedule({
			title: 'My first notification',
			text: 'Thats pretty easy...',
			foreground: true
		});
	});
}

function init() {
	notifications();
}