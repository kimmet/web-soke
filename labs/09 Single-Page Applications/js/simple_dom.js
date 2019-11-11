//console.log('page loaded');

console.log(document);
/*
document.getElementById('save').onclick = function() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	var email = document.querySelector('#userForm input[type="email"]');
	var pw = document.querySelector('#userForm input[type="password"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = email.value + " " + pw.value;
};

document.querySelector('#userForm input[type="email"]').onkeypress = function() {
	console.log('updating email');
	var email = document.querySelector('#userForm input[type="email"]').value;
	var name = document.querySelector('#userForm input[type="text"]').value;
	var pw = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary h1').innerHTML = name;
	document.querySelector('#summary p').innerHTML = email;
	document.querySelectorAll('#summary p')[1].innerHTML = pw;
};*/
document.querySelector('#userForm input[type="email"]').onkeypress = updatePage;
document.querySelector('#userForm input[type="text"]').onkeypress = updatePage;
document.querySelector('#userForm input[type="password"]').onkeypress = updatePage;
function updatePage() {
	console.log('updating page');
	var email = document.querySelector('#userForm input[type="email"]').value;
	var name = document.querySelector('#userForm input[type="text"]').value;
	var pw = document.querySelector('#userForm input[type="password"]').value;
	document.querySelector('#summary h1').innerHTML = name;
	document.querySelector('#summary p').innerHTML = email;
	document.querySelectorAll('#summary p')[1].innerHTML = pw;
}
function save() {
	console.log('save');
	// get a DOM object representing a form field.
	var name = document.querySelector('#userForm input[type="text"]');
	console.log(name);
	document.querySelector('#summary h1').innerHTML = name.value;
	var data = document.querySelectorAll('#userForm input');
	console.log(data);
	var paragraphs = document.querySelectorAll('#summary p');
	console.log('found '+paragraphs.length+' p tags');
	paragraphs[1].innerHTML = 'Hello World!';
}