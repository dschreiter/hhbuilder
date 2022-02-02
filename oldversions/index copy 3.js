// ******************************************

// DONE - Validate data entry (age is required and > 0, relationship is required)
// DONE - Add people to a growing household list
// DONE - Reset the entry form after each addition
// In Prog - Remove a previously added person from the list
// DONE -- UI
// In Prog -- From the Array
// - Display the household list in the HTML as it is modified
// - Serialize the household as JSON upon form submission as a fake trip to the server
// - Follow industry accessibility guidelines for form validation

// ******************************************
// (function () {
// IIFE to stop from poluting global scope

var myForm = document.getElementById('formTest'); //*** note for DS ad ID to element */
var addBtn = document.getElementById('add'); //*** note for DS ad ID to element */
var age = document.getElementById('age');
var relationship = document.getElementById('rel');
var smoker = document.getElementById('smoker');
var userList = [];
var errorLog = [];
var i = 0;

(function () {
	//IIFE to Cleanup HTML via JS
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

// function createUIListItem(i) {
// 	// user exist in "userList" Array, now update the UI to reflect that

// 	// Begin Building List Item from Scratch:
// 	// ***** Append the List to <ol class="household">
// 	var household = document.querySelector('.household');

// 	// ***** Create list Item with: Age, Relationship, smoking
// 	var li = document.createElement('li');
// 	// var listItemId = Math.floor(Math.random() * 99999); // generate a random id. could be more robust, fine for this purpose
// 	// li.id = listItemId;
// 	li.id = userList[i].userId;
// 	var ageText = document.createTextNode('Age: ' + userList[i].age + '    ');
// 	var relationshipText = document.createTextNode(
// 		'Relationship: ' + userList[i].relationship + '    '
// 	);
// 	var smokerText = document.createTextNode('Smoker: ' + userList[i].smoker);

// 	// ***** Create Delete Button
// 	var btn = document.createElement('button');
// 	var deleteBtnText = document.createTextNode('Delete');
// 	// generate a random id. could be more robust, fine for this purpose
// 	//btn.id = Math.floor(Math.random() * 99999);
// 	// add click event to call delete function
// 	btn.addEventListener('click', function () {
// 		deleteUser(li.id);
// 	});

// 	// add all the applicable info to the List Item
// 	li.appendChild(ageText);
// 	li.appendChild(relationshipText);
// 	li.appendChild(smokerText);

// 	//button to list
// 	btn.appendChild(deleteBtnText);
// 	li.appendChild(btn);

// 	household.appendChild(li);
// }

function createUIListItem(i) {
	// user exist in "userList" Array, now update the UI to reflect that

	// Begin Building List Item from Scratch:
	// ***** Append the List to <ol class="household">
	var household = document.querySelector('.household');
	var liElement;
	var ageText;
	var relationshipText;
	var smokerText;
	var btnElement;
	var deleteBtnText;

	function createUIPersonInfo() {
		// ***** Create list Item with: Age, Relationship, smoking
		//create li
		liElement = document.createElement('li');
		liElement.id = userList[i].userId;
		//age
		ageText = document.createTextNode('Age: ' + userList[i].age + '    ');
		//realtionship
		relationshipText = document.createTextNode(
			'Relationship: ' + userList[i].relationship + '    '
		);
		//smoker
		smokerText = document.createTextNode('Smoker: ' + userList[i].smoker);
	}
	createUIPersonInfo(); //basically a named IIFE, attempting to keep things organized

	function createUIDeleteBtn() {
		// ***** Create Delete Button
		btnElement = document.createElement('button');
		deleteBtnText = document.createTextNode('Delete');

		// add click event to call delete function
		btnElement.addEventListener('click', function () {
			deleteUser(liElement.id);
		});
	}
	createUIDeleteBtn();

	function buildOutTheListItem() {
		// add all the applicable info to the List Item
		liElement.appendChild(ageText);
		liElement.appendChild(relationshipText);
		liElement.appendChild(smokerText);

		//button to list
		btnElement.appendChild(deleteBtnText);
		liElement.appendChild(btnElement);
	}
	buildOutTheListItem();

	// Item built now append it to the list
	household.appendChild(liElement);
} // createUIListItem {}



// function addUserToList(){}

// function editUser(){}

function deleteUser(listItemId) {
	// remove the User from the UI
	document.getElementById(listItemId).remove();

	// remove the User from the userList Array
	const updatedUserList = userList.filter(function (user) {
		console.log(`userId: ${user.userId} listItemId: ${listItemId} `);
		//return user.userId === listItemId;
		return parseInt(user.userId) !== parseInt(listItemId);
	});
	console.log(updatedUserList);

	// pretty close just delete the one that, reinstates the array values play around with it. watch the nums
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
		createUIListItem(i);
		i += 1; // update iterator to read next user in the list
	} else {
		// Invalid Input
		console.log('No new User added: ' + errorLog);
	}

	// // create the List
	// var ul = document.querySelector('div.builder');
});

// })(); // IIFE
