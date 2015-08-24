var apikey = 'ah8ab3w9skkcyqb3e438la75'; // Put your API key here

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

function randomThingGetter(){
	// console.log(working);
	$.ajax ({
	    type: 'GET',
	    dataType: 'json',
	    crossDomain: true,
	    url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnlimit=1',
	    complete: function() {
	        console.log('ajax complete');
	    },
	    success: function(data) {
	        searchCallback(data.results);
	    },
	    error: function(){
	    	console.log('error!');
	    }
	});    
};	