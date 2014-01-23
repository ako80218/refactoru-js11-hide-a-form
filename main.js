$(document).ready(function(){
	var profileButton = $('#edit-profile-button');
	var formSubmit = $('#form-submit');
	//get handle on #user-form
	var form = $('#user-form');
	//get handle on #profile-content
	var profileContent = $('#profile-content');
	var toggleForm = function(element){
		element.toggle();
		
	};

	var displayElement = function(element){
		element.removeClass('hidden');
	};
	var hideElement = function(element){
		element.addClass('hidden');
	};

	profileButton.click(function(e){
		toggleForm(form);
		e.preventDefault();
	});

	formSubmit.click(function(e){
		toggleForm(form);
		e.preventDefault();
	 });


	
	


});
