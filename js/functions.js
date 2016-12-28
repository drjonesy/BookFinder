/* 
	Schema designed by Ryan Jones
	https://www.linkedin.com/in/drjonesyjones
	https://github.com/drjonesy
*/
// create a listing
function listing(array,i){
	var result = '';
	result += '<div class="box clear">';
	result +='<img src="images/'+array[i].ISBN+'.jpg" />';
	result += '<ul>';
	result += '<li><h1>'+array[i].bookTitle+'</h1></li>';
	result += '<li><h2>'+array[i].ISBN+'</h2></li>';
	result += '<li><h3>'+array[i].courseID+'</h3></li>';
	result += '<li><h4>'+array[i].courseTitle+'</h4></li>';
	if(array[i].hasOwnProperty('links')){
		result += '<li>';
			for(var j in array[i].links){
				result += '<h5><a target="_blank" href="'+array[i].links[j].url+'">'+array[i].links[j].name+'</a></h5>';
			}
		result += '</li>';
	}
	result += '</ul>';
	result += '</div>';
	result += '<div class="divider"></div>';

	return result;
}
// return all books into bookList object
	function bookList(element,array){
		var listings = '';
		for(var i in array){
			listings += listing(array, i);
		}
		//append listings to element
		$(element).html(listings);
	}
	//element allows the results to be placed over the current result or in a diffent element
	function search(element, array){
		var results = '';
		
		function searchResults(){
				results = "";
				for(var i in array){
					if(array[i].courseID === $("#course").val().replace(/\s+/g, '').toUpperCase()){
						results += listing(array,i);
					}
				}
				$(element).html(results);
			}
			
		$("#search").click(function(){
			searchResults();	
		});

		$(document).keypress(function(e) {
		    if(e.which == 13) {
		       e.preventDefault();
		       searchResults();
		    }
		});

		$("#showAll").click(function(){
			bookList(element, array);
		});
	}

	
	    
	

	// $(document).keypress(function(e) {
	// 	    if(e.which == 13) {
	// 	       e.preventDefault();
	// 	    }
	// 	});