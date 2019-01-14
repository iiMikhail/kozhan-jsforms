$(document).ready(function(){

$('#error').hide();
var validComment = (function(){
	var button = $('#buttonComment');
	var init = function(){
		_setUpListeners();
	}
	var _setUpListeners = function() {
		$('#buttonComment').on('click', function(event) {
			validateForm(event);
		});
		$('.textarea').on('click', function() {
			$('#error').hide();
		});
	}
	var validateForm = function(event) {
		event.preventDefault();
		var form = $('form');
		if( $('.textarea').val().trim() == '' ) {
			$('#error').show();
		} else {
			$('#error').hide();
			window.open('success.html');
		}	
	}
	return {
		init
	}
}());
validComment.init();
});