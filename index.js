// ******************************************
// DONE - Validate data entry (age is required and > 0, relationship is required)
// DONE - Add people to a growing household list
// DONE - Reset the entry form after each addition
// DONE- Remove a previously added person from the list
//a. DONE -- remove from UI
//b. DONE -- From the Array
// DONE - Display the household list in the HTML as it is modified
// DONE - Serialize the household as JSON upon form submission as a fake trip to the server
// Partial, alot to learn here - Follow industry accessibility guidelines for form validation
// Required fields
// submit btn not disabled
// label present in HTML
// ******************************************
(function () {
	// IIFE to stop from polluting global scope

	var submitBtn = document.querySelector('button[type=submit]');
	var addBtn = document.querySelector('.add');
	var ageElem = document.getElementById('age');
	var relationshipElem = document.getElementById('rel');
	var smokerElem = document.getElementById('smoker');
	var userList = []; // shows all active users
	var errorLog = [];
	var listIterator = 0;

	// Age to only accept numbers
	ageElem.type = 'number';
	// Accessibility: add required form fields
	ageElem.required = true;
	relationshipElem.required = true;

	//Events
	addBtn.addEventListener('click', addBtnHandler);
	submitBtn.addEventListener('click', submitBtnHandler);

	function addBtnHandler(event) {
		event.preventDefault();
		errorLog = []; // reset the error log and eval the new input
		var ageVal = parseInt(ageElem.value);

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
			createUIListItem();
			listIterator += 1; // update listitem iterator, to setup for next added user
		} else {
			// Invalid Input
			// not robust,or appropriate for anything in production of course, accessibility likely limited.
			alert('No new user added: ' + errorLog);
		}
	}

	function submitBtnHandler(event) {
		event.preventDefault();
		var debugElem = document.querySelector('.debug');
		var jsonObj = JSON.stringify(userList);
		debugElem.innerHTML = jsonObj;

		// CSS Styles: Alter the .debug display property
		if (userList.length > 0) {
			document.styleSheets[0].cssRules[0].style.display = 'block';
			document.styleSheets[0].cssRules[0].style['white-space'] =
				'break-spaces';
		} else {
			//No records exist. Do not show .debug/JSON in UI
			document.styleSheets[0].cssRules[0].style.display = 'none';
		}
	}

	function updateUserList() {
		//Add a new user to the userList
		var newUser = {
			userId: Math.floor(Math.random() * 99999), // generate a random id. could be more robust, fine for this purpose
			age: parseInt(ageElem.value),
			relationship: relationshipElem.value,
			smoker: smokerElem.checked,
		};
		userList.push(newUser);
		console.log(userList);
	}

	function createUIListItem() {
		// user exist in "userList" Array, now update the UI to reflect that

		// Begin Building List Item from Scratch:
		// ***** Append the List to <ol class="household">
		var household = document.querySelector('.household');
		var liElem;
		//info
		var ageText;
		var relationshipText;
		var smokerText;
		//btn
		var btnElem;
		var deleteBtnText;

		//***** Create list Item with: Age, Relationship, smoking *****
		//create li
		liElem = document.createElement('li');
		liElem.id = userList[listIterator].userId;
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

		// ***** Create UI Delete Button *****
		btnElem = document.createElement('button');
		deleteBtnText = document.createTextNode('Delete');

		// add click event to call delete function
		btnElem.addEventListener('click', function () {
			deleteUser(liElem.id);
		});

		// ***** Assemble List Item *****
		// add all the applicable info to the List Item
		liElem.appendChild(ageText);
		liElem.appendChild(relationshipText);
		liElem.appendChild(smokerText);

		//button to list
		btnElem.appendChild(deleteBtnText);
		liElem.appendChild(btnElem);

		// ***** Append newly built ListItem to the household List *****
		household.appendChild(liElem);
	} // End createUIListItem {}

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
		if (relationshipElem.value === '') {
			errorLog.push('Realtionship invalid');
			return false;
		} else {
			return true;
		}
	}

	function resetEntryForm() {
		//Reset Entry Form to allow another user input
		ageElem.value = '';
		relationshipElem.selectedIndex = 0;
		smokerElem.checked = false;
	}

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
})(); // IIFE
