$(document).ready(function(){
	init();
});

function init() {
	var log = console.log;
	log('init');

	var t = TweenMax;

	t.from($('body'), 25.0, {backgroundPosition:'center 60%', ease:Expo.easeOut});

}