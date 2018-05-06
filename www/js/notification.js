document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    cordova.plugins.notification.local.schedule({
        title: 'Słówko na dziś:',
        text: 'Thats pretty easy...',
        foreground: true
    });
}