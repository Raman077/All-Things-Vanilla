// create an event to detect submit button click

document.getElementById('button-submit').addEventListener("click", detect);



function detect(e){
	var siteName = document.getElementById('site-name').value;
	var siteUrl = document.getElementById('site-url').value;
	//console.log(siteName);

	var bookmark = {
	name : siteName,
	url : siteUrl
}


//save the entered information in the local storage
if (localStorage.getItem('bookmarks') === null){
	var bookmarks = [];
	bookmarks.push(bookmark);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}
else{
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	bookmarks.push(bookmark);
	localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
}

e.preventDefault();

}

function showBookmarks(){
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	var show = document.getElementById('bookmarkResults');
	show.innerHTML = '';
	for( i = 0; i< bookmarks.length ; i++){
		show.innerHTML += '<div class = "well">' +
						  '<h3>' + bookmarks[i].name + '</h3>' + 
						  '<a class = "btn btn-default" target = "_blank" href = "'+bookmarks[i].url+'">Visit</a>'+
						  '<a onClick = "deleteBookmark()" class = "btn btn-danger" target = "_blank" >Delete</a>'+
						  '</div>'
	}
}