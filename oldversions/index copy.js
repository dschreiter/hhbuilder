// - USE ES5
// DONE - Validate data entry (age is required and > 0, relationship is required)
// - Add people to a growing household list
// - Reset the entry form after each addition
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
var age = parseInt(document.getElementById('age').value);
var relationship = document.getElementById('rel').value;
var smoker = document.getElementById('smoker').checked;

// Clean Up HTML via JS
// add required form fields
age.required = true;
relationship.required = true;

// change expected data types
age.type = 'number';

//** TO DO  add ids:*/
// return htm markup back to it's orginal
// add btn
// submit btn

function validateAge() {}

function validateRelationship() {}

function formHandler() {}

// on form submit
addBtn.addEventListener('click', function (e) {
	var age = parseInt(document.getElementById('age').value);
	var relationship = document.getElementById('rel').value;
	var smoker = document.getElementById('smoker').checked;

	// alert(411);
	var errorLog = [];

	var currentUser = {
		age: age,
		relationship: relationship,
		smoker: smoker,
	};
	// var ageVal = parseInt(age.value);

	// // // check is age is valid
	// // if (isNaN(ageVal) || ageVal <= 0) {
	// // 	errorLog.push('age');
	// // 	e.preventDefault();
	// // } else if (rel.value === '') {
	// // 	errorLog.push('realtionship');
	e.preventDefault();
	// // }

	// console.log(errorLog);
	console.log(currentUser);
	// console.log(relationship);
	// console.log(smoker);
});

// })(); // IIFE
