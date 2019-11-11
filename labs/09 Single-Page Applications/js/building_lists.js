
var request = new XMLHttpRequest();
request.open('GET', 'data/books.json', false);
request.send(null);
var data = JSON.parse(request.responseText);
console.log(data);

var books = data.books;

var list = document.createElement('table');
for (var i=0; i < books.length; i++) {
	console.log(books[i].title);
	var head = document.createElement('th');
	var item = document.createElement('td');
	item.innerHTML = "(" + books[i].year + ")";
	head.innerHTML = books[i].title;

	h1 = document.createElement("h1");
	head.onclick = (function (i) { return function() {
		h1.innerHTML = books[i].title;
		document.body.insertBefore(h1, list);
	};})(i);
	list.appendChild(head);
	list.appendChild(item);
}
document.body.appendChild(list);
