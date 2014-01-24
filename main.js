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
	var booksString= '#books-';
	//get handle on #profile-content
	var $booksList =$("#books-list");
	var $librariesList =$("#libraries-list");
	var $profileContent = $('#profile-content');
	var toggleForm = function(element){
		element.toggle();
		
	};
	var writeToList = function(element){
		// var valuesList =[];
		for (var i =1; i<=3; i++){
			var j = i.toString();
			// console.log(booksString+j);
			// valuesList.push($(booksString+j).val());
			element.append('<li>' + $(booksString+j).val() +'</li>');

			

		}
		// console.log(valuesList);
	};




	

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

		writeToList($booksList);
	


	 });


	
	


});
