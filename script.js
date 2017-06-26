/*$(document).ready(function() {
	$('#credit').click(function() { 
		$('.creditsPage').show();
		$('#credit').html('<i class="fa fa-sign-out" class="credit"></i>');
		$('#credit').click(function() { 
			$('credits').hide();
			$('#credit').html('<i class="material-icons" id="credit">info_outline</i>');
		});
	});
	$('#credit').click(function() { 
		$('.creditsPage').hide();
	});
});*/

function Bytes() {
	this.bytes = 0,
	this.upgrades = 0,
	this.perClick = 1,
	this.perSec = 0
}

var clicker = new Bytes()

$('.settingsPage').hide();
$('.creditsPage').hide();
$('#byteUpgradeSec3').hide();
$('#byteUpgradeSec4').hide();
$('#byteUpgradeSec5').hide();
$('#byteUpgradeSec6').hide();

var showUpgrades = function() {
	if(clicker.bytes >= 350) {
		$('#byteUpgradeSec3').show();
	}
	
	if(clicker.bytes >= 1000) {
		$('#byteUpgradeSec4').show();
	}
	
	if(clicker.bytes >= 100000) {
		$('#byteUpgradeSec5').show();
	}
	
	if(clicker.bytes >= 1000) {
		$('#byteUpgradeSec6').show();
	}
}

var dateFunc = function() {
	setInterval(function() {
        document.getElementById('dateCount').innerHTML = Date();
    },1000);
}

var showCode = function() {
	if(clicker.bytes >= 0) {
		var code1 = document.getElementById('code1')
		code1.innerHTML = "Storage Addition";
	}

	if(clicker.bytes >= 70) {
		var code2 = document.getElementById('code2');
		code2.innerHTML = "Addition++";
	}
};

showCode();
showUpgrades();

var spaceGen = function() {
	var count = document.getElementById('bytes');
	clicker.bytes += 1
	count.innerHTML = "Bytes: " + clicker.bytes + ""
	showCode();
	showUpgrades();
}