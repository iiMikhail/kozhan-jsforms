$(document).ready(function() {
	$('#nomail').hide();
	$('#nopas').hide();
	$('#fmail').hide();
	$('#noacc').hide();

	checkLogin = (function(){
		var UserMail = 'mail@mail.ru',
			UserPassword = '123';
		var init = function() {
			_setUpListeners();
		}
		var _setUpListeners = function() {
			$('.button').on('click', function(event) {
				validateForm(event);
			});
			$('#mail').on('click', function(event) {
				$('#nomail').hide();
				$('#fmail').hide();
				$('#noacc').hide();
			});
			$('#password').on('click', function(event) {
				$('#nopas').hide();
				$('#noacc').hide();
			});
		}
		var validateForm = function(event) {
			event.preventDefault();
			//  validate e-mail
			if( $('#mail').val().trim() == '' ) {
				$('#nomail').show();
			} else {
				$('#nomail').hide();
			}
			var patern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
			if ( $('#mail').val() !== '' ) {
				if ( patern.test( $('#mail').val() ) ){
					$('#fmail').hide();
				} else {
					$('#fmail').show();
				}
			}
			

			// validate password
			if( $('#password').val().trim() == '' ) {
				$('#nopas').show();
			} else {
				$('#nopas').hide();
			}
			// end validate password

			// validate accaunt
			if ( ( $('#mail').val() !== '' ) && ( $('#password').val() !== '' ) && ( patern.test( $('#mail').val() ) ) ) {
				if( ( $('#mail').val() === UserMail ) && ( $('#password').val() === UserPassword ) ) {
				$('#noacc').hide();
				window.open('success.html');
				}	else {
				$('#noacc').show();
				}
			}
			// end validate account

		}
		return {
			init
		}
	}());
checkLogin.init();
});