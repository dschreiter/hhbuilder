// ******************************************

// DONE - Validate data entry (age is required and > 0, relationship is required)
// DONE - Add people to a growing household list
// DONE - Reset the entry form after each addition
// DONE- Remove a previously added person from the list
//a. DONE -- remove from UI
//b. DONE -- From the Array
// - Display the household list in the HTML as it is modified
// - Serialize the household as JSON upon form submission as a fake trip to the server
// - Follow industry accessibility guidelines for form validation

// ******************************************
// (function () {
// IIFE to stop from polluting global scope

var myForm = document.getElementById('formTest'); //*** note for DS ad ID to element */
var addBtn = document.getElementById('add'); //*** note for DS ad ID to element */
var age = document.getElementById('age');
var relationship = document.getElementById('rel');
var smoker = document.getElementById('smoker');
var userList = []; // shows all active users
var errorLog = [];
var listIterator = 0; // mimics useState, in terms of global access through the component.

function cleanUpHtml() {
	// Age to only accept numbers
	age.type = 'number';

	// Do not submit the form by default via the add Btn
	addBtn.type = 'button';
}
cleanUpHtml();

function ageIsValid(ageVal) {
	//validation
	if (isNaN(ageVal) || ageVal <= 0) {
		errorLog.push('Age invalid');
		return false;
	} else {
		return true;
	}
}

function relationshipIsValid() {
	//validation
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
		userId: Math.floor(Math.random() * 99999), // generate a random id. could be more robust, fine for this purpose
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

function createUIListItem() {
	// user exist in "userList" Array, now update the UI to reflect that

	// Begin Building List Item from Scratch:
	// ***** Append the List to <ol class="household">
	var household = document.querySelector('.household');
	var liElement;
	//info
	var ageText;
	var relationshipText;
	var smokerText;
	//btn
	var btnElement;
	var deleteBtnText;

	function createUIPersonInfo() {
		//Create list Item with: Age, Relationship, smoking
		//create li
		liElement = document.createElement('li');
		liElement.id = userList[listIterator].userId;
		//age
		ageText = document.createTextNode(
			'Age: ' + userList[listIterator].age + '    '
		);
		//realtionship
		relationshipText = document.createTextNode(
			'Relationship: ' + userList[listIterator].relationship + '    '
		);
		//smoker
		smokerText = document.createTextNode(
			'Smoker: ' + userList[listIterator].smoker
		);
	}
	createUIPersonInfo(); //basically a named IIFE, attempting to keep things organized

	function createUIDeleteBtn() {
		//Create Delete Button
		btnElement = document.createElement('button');
		deleteBtnText = document.createTextNode('Delete');

		// add click event to call delete function
		btnElement.addEventListener('click', function () {
			deleteUser(liElement.id);
		});
	}
	createUIDeleteBtn(); // ""

	function buildOutTheListItem() {
		// add all the applicable info to the List Item
		liElement.appendChild(ageText);
		liElement.appendChild(relationshipText);
		liElement.appendChild(smokerText);

		//button to list
		btnElement.appendChild(deleteBtnText);
		liElement.appendChild(btnElement);
	}
	buildOutTheListItem(); // ""

	// Append newly built item to the list
	household.appendChild(liElement);
} // createUIListItem {}

// function editUser(){}

function deleteUser(listItemId) {
	// 1. Remove the User from the UI
	document.getElementById(listItemId).remove();

	// 2. Remove the User from the userList Array
	const updatedUserList = userList.filter(function (user) {
		return parseInt(user.userId) !== parseInt(listItemId);
	});
	// *** Update the userList Array
	userList = updatedUserList;
	listIterator -= 1; // update list item iterator as you have removed a user
	console.log(userList);
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

		// add that new user to the UI
		//createUIListItem(i);

		createUIListItem();
		listIterator += 1; // update listitem iterator, to setup for next added user
	} else {
		// Invalid Input
		alert('No new User added: ' + errorLog);
	}
});

// })(); // IIFE
