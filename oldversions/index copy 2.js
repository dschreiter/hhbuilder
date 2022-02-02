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

// *** clean up Html via JS  ***
// Add required form fields
age.required = true;
relationship.required = true;

// Change expected data types
age.type = 'number';

// Do not submit the form by default via the add Btn
addBtn.type = 'button';

//** TO DO  add ids:*/
// return htm markup back to it's orginal
// add btn
// submit btn

// on form submit
addBtn.addEventListener('click', function (e) {
	var ageVal = parseInt(age.value);
	var errorLog = [];
	var user;

	// is Age valid
	if (isNaN(ageVal) || ageVal <= 0) {
		errorLog.push('an issue with age');
		//e.preventDefault();
	} else if (rel.value === '') {
		// is Realtionship valid
		errorLog.push('an issue with realtionship');
		//e.preventDefault();
	}

	// No Errors, Add User
	if (errorLog.length === 0) {
		user = {
			age: ageVal,
			relationship: relationship.value,
			smoker: smoker.checked,
		};
		userList.push(user);

		// Reset Entry Form
		age.value = '';
		relationship.selectedIndex = 0;
		smoker.checked = false;
	}

	console.log(userList);
	//e.preventDefault();

	// create the List
	var ul = document.querySelector('div.builder');
});

// })(); // IIFE
