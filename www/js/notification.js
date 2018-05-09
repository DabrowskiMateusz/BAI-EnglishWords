document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	
	
}

var now             = new Date().getTime(),
    _5_sec_from_now = new Date(now + 5*1000);
	
function notification() {
	console.log(now);
	console.log(_5_sec_from_now);
	
    cordova.plugins.notification.local.schedule({
        title: 'Słówko na dziś:',
        text: 'Thats pretty easy...',
        foreground: true,
		trigger: { every: 'day', count: 5 },

    });

}