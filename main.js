$(document).ready(function(){
	var $profileButton = $('#edit-profile-button');
	var $formSubmit = $('#form-submit');
	//get handle on #user-form
	var $form = $('#user-form');
	var $nameInput = $('#name-input');
	var $nameField = $('#name-field');
	var $bioTextArea =$('#bio-text-area');
	var $bioField = $('#bio-field');
	//get handle on #profile-content
	var $profileContent = $('#profile-content');
	var toggleForm = function(element){
		element.toggle();
		
	};

	var updateTextElement = function(element){

	};

	// var displayElement = function(element){
	// 	element.removeClass('hidden');
	// };
	// var hideElement = function(element){
	// 	element.addClass('hidden');
	// };

	$profileButton.click(function(e){
		toggleForm($form);
		e.preventDefault();
	});

	$formSubmit.click(function(e){
		toggleForm($form);
		var nameValue = $nameInput.val();
		console.log(nameValue);
		$nameField.text(nameValue);
		var bioValue = $bioTextArea.val();
		$bioField.text(bioValue);

		e.preventDefault();
	


	 });


	
	


});
