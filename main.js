$(document).ready(function(){
	var profileButton = $('#edit-profile-button');
	var formSubmit = $('#form-submit');


	//get handle on #user-form
	var form = $('#user-form');
	//get handle on #profile-content
	var profileContent = $('#profile-content');


	profileButton.click(function(){

		// console.log('clicked');
		// remove class hiding the form
		form.removeClass('hidden');
		profileContent.addClass('hidden');
	});
	formSubmit.click(function(){

		// console.log('clicked');
		// remove class hiding the form
		form.addClass('hidden');
		profileContent.removeClass('hidden');
	});

});
