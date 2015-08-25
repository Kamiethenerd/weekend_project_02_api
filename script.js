 // Put your API key here

// Use this function to do stuff with your results. 
// It is called after 'search' is executed.
$wgCrossSiteAJAXdomains = ['*.wikipedia.org'];

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
		console.log('clicked!');
		randomThingGetter();
	})
});

//Ajax for getting the random entry from Wikipedia
function randomThingGetter(){
	console.log('working');
	$.ajax( {
    url: 'https://en.wikipedia.org/w/api.php',
    data: {
        action: 'query',
        meta: 'tokens',
        format: 'json',
        origin: 'https://www.mediawiki.org'
    },
    xhrFields: {
        withCredentials: true
    },
    dataType: 'json'
} ).then( function ( data ) {
    $.ajax( {
        url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=jsonfm&rnlimit=1',
        method: 'GET',
        data: {
            action: 'options',
            format: 'json',
            token: data.query.tokens.csrftoken,
            optionname: 'userjs-test',
            optionvalue: 'Hello world!'
        },
        xhrFields: {
            withCredentials: true
         },
        dataType: 'json'
    } );
} );
};

// 	$.ajax ({
// 	    type: 'GET',
// 	    dataType: 'jsonfm',
// 	    crossDomain: true,
// 	    url: 'https://en.wikipedia.org/w/api.php?action=query&list=random&format=jsonfm&rnlimit=1',
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
