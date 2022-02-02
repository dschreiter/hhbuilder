// - USE ES5
// DONE - Validate data entry (age is required and > 0, relationship is required)
// - Add people to a growing household list
// DONE - Reset the entry form after each addition
// - Remove a previously added person from the list
// - Display the household list in the HTML as it is modified
// - Serialize the household as JSON upon form submission as a fake trip to the server
// - Follow industry accessibility guidelines for form validation

//== DS NOTES/directions================================================

// *** FORM
// check if age exist, required
// check is age is > 0
// check relationship exist, required

//*** DATA */
// store in person Object

// *** LIST *****
// create a List
// append that person data to the list
// present that person object
//==================================================

// // age.addEventListener('onChange', function () {
// // 	console.log(411);
// // });

// button.addEventListener('click', (e) => {
// 	console.log(e.target.id);
// });

//submit form
// check if age exist, required
// check is age is > 0

// check relationship exist, required

// (function () {
// IIFE avoid poluting global scope
// var instead of const & let as ES5 is specified
var myForm = document.getElementById('formTest');
var addBtn = document.getElementById('add');
var age = document.getElementById('age');
var relationship = document.getElementById('rel');
var smoker = document.getElementById('smoker');
var userList = [];
var errorLog = [];

(function () {
	//Cleanup HTML via JS
	// Age to only accept numbers
	age.type = 'number';

	// Do not submit the form by default via the add Btn
	addBtn.type = 'button';
})();

function ageIsValid(ageVal) {
	if (isNaN(ageVal) || ageVal <= 0) {
		errorLog.push('Age invalid');
		return false;
	} else {
		return true;
	}
}

function relationshipIsValid() {
	if (relationship.value === '') {
		errorLog.push('Realtionship invalid');
		return false;
	} else {
		return true;
	}
}

function updateUserList() {
	//Add a new user to the userList
	var newUser = {
		age: parseInt(age.value),
		relationship: relationship.value,
		smoker: smoker.checked,
	};
	userList.push(newUser);
	console.log(userList);
}

function resetEntryForm() {
	//Reset Entry Form to allow another user input
	age.value = '';
	relationship.selectedIndex = 0;
	smoker.checked = false;
}

// Add Btn: Add a New User
addBtn.addEventListener('click', function (e) {
	errorLog = []; // reset the error log and eval the new input
	var ageVal = parseInt(age.value);

	// Validate Inputs, add user or log errors
	if (
		ageIsValid(ageVal) === true &&
		relationshipIsValid() === true &&
		errorLog.length === 0
	) {
		//Valid Inputs: Add a new user to the list
		updateUserList();
		//Reset Form for new entries
		resetEntryForm();
	} else {
		// Invalid Input
		console.log('No new User added: ' + errorLog);
	}

	// // create the List
	// var ul = document.querySelector('div.builder');
});

// })(); // IIFE
