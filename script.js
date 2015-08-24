var apikey = ''; // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
function searchCallback(data) {
	console.log(data);
	var content = $('#results');
	data.results.forEach(function(element, index){
		var $newDiv = $('<div>');		
		var $newP = $('<p>');
		$newP.text(element.name);
		$newDiv.append($newP);
		content.append($newDiv);
	});
}

$(document).ready(function() {
	$('#random').on('click', function(e){
		// var query = $('#search').val();
		// console.log('Searching: ', query);
		randomThingGetter();
	})
});

xhr.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );

// Using jQuery
$.ajax( {
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
        searchCallback(data.results);
    }
} );

// Using mw.Api, specify it when creating the mw.Api object
var api = new mw.Api( {
    ajax: {
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnlimit=1',
        headers: { 'Api-User-Agent': 'Example/1.0' }
    }
} ).done(function(data) {
    // do something with data
});

// function randomThingGetter(){
// 	// console.log(working);
// 	$.ajax(){
// 	    type: 'GET',
// 	    dataType: 'json',
// 	    crossDomain: true,
// 	    url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnlimit=1',
// 	    complete: function() {
// 	        console.log('ajax complete');
// 	    },
// 	    success: function(data) {
// 	        searchCallback(data.results);
// 	    },
// 	    error: function(){
// 	    	console.log('error!');
// 	    }
// 	});    
// };	