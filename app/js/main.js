var fs = require('fs');
var gui = require('nw.gui');

var version_string = '';

var patchNotesURL = 'http://12sky.alt1games.co.kr/Launcher/LauncherNew01.htm';

function btnOptions_click(event) {
	console.log('Open options dialog.');
}

function btnRegister_click(event) {
	gui.Shell.openExternal("http://website.com");
}

function btnCommunity_click(event) {
  console.log('Community should open in web browser.');
  gui.Shell.openExternal("http://website.com");
}

function btnStartGame_click(event) {
	console.log('Game would start with these parameters:', undefined, undefined);
}


$(document).ready(function(){
	// Setup buttons
	$('#btnOptions').click(btnOptions_click);
	$('#btnRegister').click(btnRegister_click);
	$('#btnCommunity').click(btnCommunity_click);
	$('#btnStartGame').click(btnStartGame_click);

	// Disable start game button untill Launcher finishes patching process.
	$('#btnStartGame').prop('disabled', true);

	// Get Version string
	var versiondat = '../PRESENTVERSION.DAT';

	fs.readFile(versiondat,'utf8', function(err,data){
		if (err) {
			alert('Error reading '+versiondat+' please ensure Launcher is in the Twelve Sky directory.');
			console.error(err);
			gui.exit();
			return;
		}

		version_string += 'Game Version: ' + Number(data);
		$('#version').text(version_string);
	});

	$('#patchnotes').attr('src',patchNotesURL);
});
