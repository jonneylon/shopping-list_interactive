$(document).ready(function() {

	/*////// Selecting the elements that will be used in the jquery 
	statements below and creating a variable name for them ///////////*/


	var list = $('#listItems');
	var newItem = $('#textBox');
	var clear = $('#clear-button');
	var doneButton = $('.fa fa-check');
	var deleteButton = $('.fa fa-trash');


	/*//////jQuery UI Shorthand to make the list items sortable ///////////*/


	list.sortable();


	/*////// Selecting the add-button element and on the 'click' event, 
	add text from the text input ///////////*/


	$('#add-button').on('click', addItem);


	/*////// Add an item to the list when you press 'enter' ///////////*/


	newItem.keydown(function(enter) {
	if (enter.keyCode == 13) {
		addItem();
	}
	});


	/*////// Attach an event handler function for one or more events 
	to the selected elements. ///////////*/


	list.on('click', '.fa-check', doneItem);
	list.on('click', '.fa-trash', deleteItem);

	});

function addItem() {
	var inputItem = $('#textBox').val();
	var list = $('#listItems');
	var listItem = $('<li><i class="fa-check"></i>' + inputItem + '<i class="fa-trash"></i></li>');
	var newItem = $('#textBox');

	if (inputItem.length === 0 || inputItem.length > 41) {
		return false;
	}
	
	list.append(listItem);
	$(newItem).val('');
}

function doneItem () {
	if ($(this).parent().css('opacity') == '0.6') {
		$(this).parent().css('opacity','1');
	} else {
		$(this).parent().css('opacity','0.6');
	}
}

function deleteItem() {
	$(this).parent().remove();
}

function clearList() {
	var list = $('#listItems');
	
	list.html('');
}


